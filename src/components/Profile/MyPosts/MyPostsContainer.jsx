import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostText } from '../../../redux/profileReducer';

//import './index.scss';



function MyPostsContainer ({state, posts, dispatch}) {
 
  const addPost = () => {
    dispatch(addPostActionCreator());
  }

  const updatePost = (text) => {
    // let text = textarea.current.value;
    dispatch(updateNewPostText(text));
  }

  return (
    <MyPosts state={state} updatePost={updatePost}  addPost={addPost} posts={posts} />
  );
}

export default MyPostsContainer;