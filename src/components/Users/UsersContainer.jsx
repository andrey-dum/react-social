import React from "react";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";
import * as axios from "axios";

class UsersContainer extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  // getUsers = () => {
  //     if ( this.props.users.length === 0) {
  //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
  //             .then(response => {
  //                 console.log(response.data.items)
  //                 this.props.setUsers(response.data.items)
  //             })

  //     }
  // }

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onFollow = userId => {
    this.props.follow(userId);
    console.log("Add friend");
  };

  onUnfollow = userId => {
    this.props.unfollow(userId);
  };

  onPageChange = pageN => {
    this.props.setCurrentPage(pageN);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageN}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        onFollow={this.onFollow}
        onUnfollow={this.onUnfollow}
        onPageChange={this.onPageChange}
        users={this.props.users}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followActionCreator(userId));
    },
    unfollow: userId => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: totalCount => {
      dispatch(setTotalUsersCountAC(totalCount));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
