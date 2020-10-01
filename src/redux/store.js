import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
  _state: {

    profilePage: {
      NewPosttext: 'Test text',
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
    },
 
   dialogsPage: {
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
 },
 _callSubscriber () {
  console.log('State changed');
  },

  getState() {
    return this._state
  },

  subscribe (observer) {
    this._callSubscriber = observer;
  },

    dispatch (action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

      this._callSubscriber(this._state)

    }
 
}




export default store;