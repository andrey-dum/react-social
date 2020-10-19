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
                ...action.payload,
                // isAuth: true,
                
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

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth
    }
})



export const authMeTC = () => (dispatch) => {
    authAPI.authMe().then(response => {
        if(response.data.resultCode === 0) {
          const { id, email, login } = response.data.data;

          dispatch(setAuthUserData(id, email, login, true));
          
          console.log('Success', id)
         
        //   axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
        //     this.props.setUserProfile(response.data)
        //  })
  
        }
  
      })
  
}


export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if(response.data.resultCode === 0) {
          dispatch(authMeTC());
        }
  
      })
  
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
      })
  
}

export default authReducer;