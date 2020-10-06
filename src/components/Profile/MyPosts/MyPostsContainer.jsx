import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostText } from '../../../redux/profileReducer';
import StoreContext from '../../../context/StoreContext';

//import './index.scss';



function MyPostsContainer () {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          console.log(store)
          let state = store.getState().profilePage;

          const addPost = () => {
            store.dispatch(addPostActionCreator());
          }
        
          const updatePost = (text) => {
            // let text = textarea.current.value;
            store.dispatch(updateNewPostText(text));
          }

          return <MyPosts state={state} updatePost={updatePost}  addPost={addPost} posts={state.posts} />
        }
      }
    
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;