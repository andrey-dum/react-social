const state = {

   profilePage: {
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
  
}
  
  
export default state;