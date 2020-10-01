const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
                let New = {
                    id: 123,
                    text: state.NewPosttext,
                    likes: 121341
                    }
                state.posts.push(New)
                state.NewPosttext = '';
                return state;

        case UPDATE_NEW_POST_TEXT:
                state.NewPosttext = action.NewPosttext;
                return state;

        case 'GET_POSTS':   
            return state.posts;
             

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