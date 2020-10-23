import React from "react";
import "./index.scss";
import { MdPublic } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import profilePhoto from "../../assets/images/profile_noimage.png";



function UserItem({user, followingInProgress, onFollow, onUnfollow}) {

  return (
    <div className="user__item">
      <div className="user__avatar">
      <NavLink to={`/profile/${user.id}`}>
        <img
          src={user.photos.small ? user.photos.small : profilePhoto}
          alt={user.name}
          className=""
        />
        </NavLink>
      </div>
      <div className="user__info">
        <div className="user__name">{user.name}</div>
        <small className="user__status">{user.status}</small>
      </div>

      <div className="user__followButtons">
      
        {user.followed ? (
          <button
            disabled={followingInProgress.some(id => id === user.id)}
            className="unfollow"
            onClick={() => onUnfollow(user.id)}
          >
            Unfollow
          </button>
        ) : (
          <button 
            disabled={followingInProgress.some(id => id === user.id)}
            className="follow" onClick={() => onFollow(user.id)}>
            Follow
          </button>
        )}
      </div>

    </div>
  );
}

export default UserItem;
