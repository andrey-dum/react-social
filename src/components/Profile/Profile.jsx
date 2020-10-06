import React from 'react';

import './index.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



function Profile ({state, dispatch}) {

  return (
    <div className="profile">

        <div className="profile__user">

            <ProfileInfo />

            {/* <MyPosts state={state} posts={state.posts} dispatch={dispatch}/> */}
            <MyPostsContainer state={state} posts={state.posts} dispatch={dispatch} />

        </div>

    </div>
  );
}

export default Profile;