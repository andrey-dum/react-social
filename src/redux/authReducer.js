import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH'


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}


const authReducer = (state=initialState, action) => {

    switch(action.type) {
        case SET_AUTH_USER_DATA:
         
            return {
                ...state,
                ...action.data,
                isAuth: true,
                
            }


        default:
          return state;
    }
}



// export const setAuth = (data) => ({
//     type: SET_AUTH,
//     data: {
//         ...data
//     }
// })

export const setAuthUserData = (userId, email, login) => ({
    type: SET_AUTH_USER_DATA,
    data: {
        userId,
        email,
        login,
    }
})



export const authMeTC = () => (dispatch) => {
    authAPI.authMe().then(response => {
        if(response.data.resultCode === 0) {
          const { id, email, login } = response.data.data;

          dispatch(setAuthUserData(id, email, login));
          
          console.log('Success', id)
         
        //   axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
        //     this.props.setUserProfile(response.data)
        //  })
  
        }
  
      })
  
}

export default authReducer;