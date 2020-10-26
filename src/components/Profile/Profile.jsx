import React from 'react';

import './index.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



function Profile ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) {
               
 
  return (
    <div className="profile">

        <div className="profile__user">

            <ProfileInfo isOwner={isOwner} savePhoto={savePhoto} profile={profile} status={status} updateStatus={updateStatus} saveProfile={saveProfile}/>

            {/* <MyPosts state={state} posts={state.posts} dispatch={dispatch}/> */}
            <MyPostsContainer  />

        </div>

    </div>
  );
}

export default Profile;