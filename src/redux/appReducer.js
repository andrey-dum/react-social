import { authAPI } from "../api/api";
import { getAuthUserData } from "./authReducer";

const INITIALIZE_SUCCES = 'INITIALIZE_SUCCES'


const initialState = {
    initialized: false
}


const appReducer = (state=initialState, action) => {

    switch(action.type) {
        case INITIALIZE_SUCCES:
         
            return {
                ...state,
                initialized: true,
            }

        default:
          return state;
    }
}


export const initializeSucces = () => ({
    type: INITIALIZE_SUCCES,
})



export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData()); // need return promise

    // promise.then(() => {
    //     dispatch(initializeSucces());
    // });

    Promise.all([promise])
        .then(() => {
            dispatch(initializeSucces());
    });
}


export default appReducer;