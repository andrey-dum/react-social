import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const initialState = {
    posts: [],
    messages: []
}

let reducer = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer
});

let store = createStore(reducer)

export default store