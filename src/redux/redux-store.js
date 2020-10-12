import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";



let reducer = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducer)

export default store