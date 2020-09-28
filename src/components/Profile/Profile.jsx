import React from 'react';

import './index.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



function Profile ({state}) {
  
  console.log(state)
  
  return (
    <div className="profile">

        <div className="profile__user">

            <ProfileInfo />

            <MyPosts posts={state.posts} />

        </div>

    </div>
  );
}

export default Profile;