const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


const initialState = {
    users: [
    //    { id: 1, followed: false, name: 'Sancho', status: 'Hello, bro', location: {city: 'Minsk', country: 'Belarus'}, img: 'https://olympus.crumina.net/wp-content/uploads/avatars/9/5c34850901fc7-bpthumb.jpg'},
    //    { id: 2, followed: true, name: 'Android', status: 'I want to learn react', location: {city: 'Kyiv', country: 'Ukraine'}, img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'},
    //    { id: 3, followed: false, name: 'Armen', status: 'I search job', location: {city: 'London', country: 'England'}, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU'},
    //    { id: 4, followed: true, name: 'Aligator', status: 'Who want play football tomorrow', location: {city: 'NewYork', country: 'USA'}, img: 'https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png'},
    //    { id: 5, followed: false, name: 'Red', status: 'Go to mountains next week!!!', location: {city: 'Barcelona', country: 'Spain'}, img: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/74/grinning-face_1f600.png'},
    ],
    show: 4,
    
    
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
                users: [...state.users, ...action.users]
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

// export const deleteUserctionCreator = (id) => ({ 
//     type: DEELETE,
//     payload: id
// }
// );
    
      
      
  
export default usersReducer;

