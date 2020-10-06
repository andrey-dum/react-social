import React from 'react';

import './index.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



function Profile () {

  return (
    <div className="profile">

        <div className="profile__user">

            <ProfileInfo />

            {/* <MyPosts state={state} posts={state.posts} dispatch={dispatch}/> */}
            <MyPostsContainer  />

        </div>

    </div>
  );
}

export default Profile;