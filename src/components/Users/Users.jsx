import React from "react";
import "./index.scss";
import { MdPublic } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import profilePhoto from "../../assets/images/profile_noimage.png";


function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  // ' i <= pagesCount ' insert in for
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  return (
    <div className="users">
      <div className="pagination">
        {pages.map(p => (
          <span
            onClick={() => props.onPageChange(p)}
            className={props.currentPage === p ? "active" : ""}
          >
            {p}
          </span>
        ))}
      </div>
      <div className="users__list">
        {
          props.users.map(u => (
            <div key={u.id} className="user__item">
              <div className="user__avatar">
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small ? u.photos.small : profilePhoto}
                  alt={u.name}
                  className=""
                />
                </NavLink>
              </div>
              <div className="user__info">
                <div className="user__name">{u.name}</div>
                <small className="user__status">{u.status}</small>
              </div>

              <div className="user__followButtons">
                {u.followed ? (
                  <div
                    className="unfollow"
                    onClick={() => props.onUnfollow(u.id)}
                  >
                    Unfollow
                  </div>
                ) : (
                  <div className="follow" onClick={() => props.onFollow(u.id)}>
                    Follow
                  </div>
                )}
              </div>

              {/* <div className="user__location">
                            <MdPublic />
                            <div> 
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div> */}
            </div>
          ))}
       

        <div className="users__showMore">
          <button className="button">Show More</button>
        </div>
      </div>
    </div>
  );
}

export default Users;
