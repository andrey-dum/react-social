import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH'


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



export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authMe();

    if(response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

// export const getAuthUserData = () => (dispatch) => {
//     return authAPI.authMe().then(response => {
//         if(response.data.resultCode === 0) {
//           const { id, email, login } = response.data.data;

//           dispatch(setAuthUserData(id, email, login, true));
          
//         }
  
//       })
  
// }



export const login = (email, password, rememberMe) => async (dispatch) => {
    
    let response = await authAPI.login(email, password, rememberMe);

    if(response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Something went wrong.';
        dispatch(stopSubmit("login", { _error: message }))
    }
}

export const logout = () => async (dispatch) => {
   let response = await authAPI.logout();
    if(response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;