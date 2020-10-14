import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'



const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    
}

const usersReducer = (state=initialState, action) => {

    switch (action.type) {

        case FOLLOW:
          return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId) {
                    return {
                        ...u,
                        followed: true,
                      
                    }
                }
                return u;
            })
          }

          case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.payload.userId) {
                        return {
                            ...u,
                            followed: false,
                        }
                    }
                    return u;
                })
            }

          case SET_USERS:
            return {
                ...state,
                //users: [...state.users, ...action.users], add in the end
                users: action.users, // clear old and add new users
          }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
        }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
        }

        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
        }

        default:
          return state;
        }
    }
    
    


//AC
export const setUsers = (users) => ({ 
    type: SET_USERS,
    users,
     }
);

export const follow = (userId) => (
    { 
        type: FOLLOW,
        userId
       
    }
);

export const unfollow = (userId) => ({ 
        type: UNFOLLOW,
        payload: {
            userId
        }
    }
);

export const setCurrentPage = (currentPage) => ({ 
    type: SET_CURRENT_PAGE,
    currentPage
    }
);
export const setTotalUsersCount = (totalCount) => ({ 
    type: SET_TOTAL_USERS_COUNT,
    totalCount
    }
);
export const toggleIsFetching = (isFetching) => ({ 
    type: TOGGLE_IS_FETCHING,
    isFetching
    }
);

export const toggleFollowingProgress = (isFetching, userId) => ({ 
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId
    }
);

    
export const getUsersThunkCreator = (currentPage, pageSize) =>  {
        return (dispatch) => {

            dispatch(toggleIsFetching(true));
            // dispatch(setCurrentPage(currentPage));

            userAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(setUsers(data.items));
                dispatch(toggleIsFetching(false));
                dispatch(setTotalUsersCount(data.totalCount));
              })
        }
    };


 export const followThunkCreator = (userId) =>  {
        return (dispatch) => {

            dispatch(toggleFollowingProgress(true, userId));
            userAPI.onfollow(userId)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(follow(userId));
                    }
                dispatch(toggleFollowingProgress(false, userId))
        })
    }
};

export const unfollowThunkCreator = (userId) =>  {
    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));
        userAPI.onunfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId));
                }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
};

  
export default usersReducer;

