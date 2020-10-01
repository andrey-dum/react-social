const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const dialogsReducer = (state, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE:
            let msg = state.NewMessageText;
            state.messages.push({id: 12, message: msg});
            state.NewMessageText = '';
            return state;
    
        case UPDATE_NEW_MESSAGE_TEXT:
            state.NewMessageText = action.NewMessageText;
            return state;
   
        default:
            return state;
        }
}


export const addMessageActionCreator = () => (
    { 
      type: ADD_MESSAGE,
    }
    );
  
  
  
  export const updateNewMessageTextActionCreator = (text) => (
    { 
    type: UPDATE_NEW_MESSAGE_TEXT,
    NewMessageText: text,
  });
    

export default dialogsReducer