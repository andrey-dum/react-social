import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH'
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null //if null, then captcha is not required
}


const authReducer = (state=initialState, action) => {

    switch(action.type) {
        case SET_AUTH_USER_DATA:
         
            return {
                ...state,
                ...action.payload,
                // isAuth: true,
                
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
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

export const getCaptchaUrl = (captchaUrl) => ({
    type: GET_CAPTCHA_URL,
    payload: {
        captchaUrl
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



export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    
    const response = await authAPI.login(email, password, rememberMe, captcha);

    if(response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }

        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Something went wrong.';
        dispatch(stopSubmit("login", { _error: message }))
    } 
}

export const getCaptcha = () => async (dispatch) => {
    
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.data.url;  
    dispatch(getCaptchaUrl(captchaUrl))

}
// export const getCaptcha = () => (dispatch) => {
    
//     return securityAPI.getCaptcha().then(response => {
//          const captchaUrl = response.data.url;  
//          dispatch(getCaptchaUrl(captchaUrl))
//       })
// }




export const logout = () => async (dispatch) => {
   const response = await authAPI.logout();
    if(response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;