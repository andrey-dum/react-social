const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'



const initialState = {
    NewMessageText: '',
    dialogs: [
       { uid: 1, name: 'Sancho' },
       { uid: 2, name: 'Android' },
       { uid: 3, name: 'Armen' },
       { uid: 4, name: 'Aligator' },
       { uid: 5, name: 'Red' },
    ],
    messages: [
       { uid: 1, message: 'Hi',  name: 'Andrey Dum', },
       { uid: 2, message: 'Hello', name: 'Armen', },
       { uid: 3, message: 'How are you^7' },
       { uid: 4, message: 'I am fine' },
       { uid: 5, message: 'Where you from?' },
     ]
}


const dialogsReducer = (state=initialState, action) => {
    
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