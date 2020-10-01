const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

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
 
 
//  addPost: function (data) {
//   type === 'ADD_POST'
//   this._state.profilePage.posts.push({...data})
//   this._state.profilePage.NewPostext = '';
//   this._callSubscriber(this._state)
//   },
//   updatePost(newText) {
//     this._state.profilePage.NewPostext = newText;
//     this._callSubscriber(this._state)
//   },
  dispatch (action) {
    let New = {
      id: 123,
      text: this._state.profilePage.NewPosttext,
      likes: 121341
      }
    if (action.type === ADD_POST) {
      this._state.profilePage.posts.push(New)
      this._state.profilePage.NewPosttext = '';
      this._callSubscriber(this._state)
    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.NewPosttext = action.NewPosttext;
      this._callSubscriber(this._state)
    }
    if (action.type === 'GET_POSTS') {
      return this._state.profilePage.posts;
    }
  }
 
}



export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({ 
    type: UPDATE_NEW_POST_TEXT, 
    NewPosttext: text });
  
  
export default store;