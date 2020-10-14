import { userAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';



const initialState = {
    NewPosttext: '',
     posts: [
       { 
         id: 1,
         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ex maxime officiis soluta perspiciatis', 
         likes: 12
       },
       {
         id: 2,
         text: 'obcaecati sequi porro dolor assumenda, iste repudiandae asperiores fuga praesentium amet eum consectetur tempora esse dolorum!', 
         likes: 10
       },
     ],
     profile: null
}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
          let New = {
              id: 123,
              text: state.NewPosttext,
              likes: 121341
              }
          return {
            ...state,
            posts: [...state.posts, New],
            NewPosttext: '',
          };
        }

        case UPDATE_NEW_POST_TEXT: {
          return {
            ...state,
            NewPosttext: action.NewPosttext
          };
        }

        case SET_USER_PROFILE: {
          return {
            ...state,
            profile: action.profile
          }
        }

        default:
            return state;
    }

}



export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => (
  { 
    type: UPDATE_NEW_POST_TEXT, 
    NewPosttext: text 
  }
);
  

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})


export const getUserProfile = (userId) => (dispatch) => {
  userAPI.getProfile(userId).then(response => {
    
       dispatch(setUserProfile(response.data))
  })
}

export default profileReducer