const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'



const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    
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

        //   case DELETE:
        //     return {
        //         ...state,
        //         users: [...state.users.filter(u => u.id !== action.payload)]
        //   }

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

        default:
          return state;
        }
    }
    
    
export const setUsersAC = (users) => ({ 
    type: SET_USERS,
    users,
     }
);
    


export const followActionCreator = (userId) => (
    { 
        type: FOLLOW,
        userId
       
    }
);

export const unfollowActionCreator = (userId) => ({ 
        type: UNFOLLOW,
        payload: {
            userId
        }
    }
);

export const setCurrentPageAC = (currentPage) => ({ 
    type: SET_CURRENT_PAGE,
    currentPage
    }
);
export const setTotalUsersCountAC = (totalCount) => ({ 
    type: SET_TOTAL_USERS_COUNT,
    totalCount
    }
);
export const toggleIsFetchingtAC = (isFetching) => ({ 
    type: TOGGLE_IS_FETCHING,
    isFetching
    }
);

// export const deleteUserctionCreator = (id) => ({ 
//     type: DEELETE,
//     payload: id
// }
// );
    
      
      
  
export default usersReducer;

