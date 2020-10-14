import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'



let reducer = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store