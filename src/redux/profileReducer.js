import { userAPI, profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";


const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';




const initialState = {
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
     profile: null,
     status: '11212',
}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
          let New = {
              id: 123,
              text: action.newPostText,
              likes: 121341
              }
          return {
            ...state,
            posts: [...state.posts, New],
      
          };
        }


        case SET_USER_PROFILE: {
          return {
            ...state,
            profile: action.profile
          }
        }

        case SET_STATUS: {
          return {
            ...state,
            status: action.status
          }
        }
        case DELETE_POST: {
          return {
            ...state,
            posts: state.posts.filter(p => p.id !== action.postId),
            
          }
        }
        case SAVE_PHOTO_SUCCESS: {
          return {
            ...state,
            profile: {...state.profile, photos: action.photos},
            
          }
        }

        default:
            return state;
    }

}



export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
  

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId
})
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
})







export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
}



export const getUserProfile = (userId) => async (dispatch) => {
  let response = await userAPI.getProfile(userId);   
  dispatch(setUserProfile(response.data))
}

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {

  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId))
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Something went wrong.';
      dispatch(stopSubmit("edit-profile", { _error: message }))
      return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer