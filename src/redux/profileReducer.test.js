import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";
import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';


let state = {
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


test('new post should be added', () => {
  const action = addPostActionCreator('Hello');

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});


test('message of new post should be == Hello', () => {
  const action = addPostActionCreator('Hello');

  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe('Hello');
});


test('after deleting length of messages should be decrement', () => {
  const action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});
