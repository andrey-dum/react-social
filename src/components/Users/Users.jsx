import React from "react";
import "./index.scss";
import Paginator from "../../common/Paginator";
import UserItem from "./UserItem";


function Users({totalUsersCount, pageSize, currentPage, onPageChange, ...props}) {
  return (
    <div className="users">
      <Paginator 
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
        // portionSize={10}
        {...props} />

      <div className="users__list">
        {
          props.users.map(u => (
            <UserItem key={u.id} user={u} followingInProgress={props.followingInProgress} onFollow={props.onFollow} onUnfollow={props.onUnfollow} />
          ))}
        <div className="users__showMore">
          <button className="button">Show More</button>
        </div>
      </div>
    </div>
  );
}

export default Users;
