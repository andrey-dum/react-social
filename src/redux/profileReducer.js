import { userAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';




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
              text: action.NewPostText,
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

        default:
            return state;
    }

}



export const addPostActionCreator = (NewPostText) => ({ type: ADD_POST, NewPostText });
  

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})


export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
    
  })
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
    
  })
}

export const getUserProfile = (userId) => (dispatch) => {
  userAPI.getProfile(userId).then(response => {
         
      dispatch(setUserProfile(response.data))
  })
}



export default profileReducer