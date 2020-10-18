const ADD_MESSAGE = 'ADD_MESSAGE'


const initialState = {
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
      let msg = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, {id: 12, message: msg}]
      }
    

    default:
      return state;
    }
}


export const addMessageActionCreator = (newMessageText) => (
    { 
      type: ADD_MESSAGE,
      newMessageText
    }
);
  
 
    

export default dialogsReducer