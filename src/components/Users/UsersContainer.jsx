import React from "react";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";

import UserLoader from "./UserLoader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onFollow = userId => {
    this.props.followThunkCreator(userId);
    console.log(this.props.followingInProgress);
  };

  onUnfollow = userId => {
    this.props.unfollowThunkCreator(userId);
  };

  onPageChange = pageN => {
    // this.props.setCurrentPage(pageN);

    this.props.getUsersThunkCreator(pageN, this.props.pageSize);
  };

  render() {
    return (
      <div className=" box">
        {!this.props.isFetching && (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            onFollow={this.onFollow}
            onUnfollow={this.onUnfollow}
            onPageChange={this.onPageChange}
            users={this.props.users}
            followingInProgress={this.props.followingInProgress}
            // toggleFollowingProgress={this.props.toggleFollowingProgress}
          />
        )}

        {this.props.isFetching &&
          Array(5)
            .fill(0)
            .map((_, index) => <UserLoader key={index} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(mapStateToProps, {
  // follow,
  // unfollow,
  // setUsers,
  // setCurrentPage,
  // setTotalUsersCount,
  // toggleIsFetching,
  // toggleFollowingProgress,

  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
})(UsersContainer);
