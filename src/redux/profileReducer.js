const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'



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
     ]
}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
          let New = {
              id: 123,
              text: state.NewPosttext,
              likes: 121341
              }
          // let copyState = {...state}
          // copyState.posts = [...state.posts]
          // copyState.posts.push(New)
          // copyState.NewPosttext = '';
          return {
            ...state,
            posts: [...state.posts, New],
            NewPosttext: '',
          };
        }

        case UPDATE_NEW_POST_TEXT: {
          // let copyState = {...state}
          // copyState.NewPosttext = action.NewPosttext;
          return {
            ...state,
            NewPosttext: action.NewPosttext
          };
        }
        // case 'GET_POSTS':   
        //     return state.posts;

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
  



export default profileReducer