import React from "react";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleIsFetchingtAC
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";
import * as axios from "axios";
import UserLoader from "./UserLoader";

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
    this.props.toggleIsFetching(true);
   
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);
        this.props.setTotalUsersCount(response.data.totalCount);
        
      });
  }
  
  onFollow = userId => {
    this.props.follow(userId);
 
  };

  onUnfollow = userId => {
    this.props.unfollow(userId);
  };

  onPageChange = pageN => {
    this.props.setCurrentPage(pageN);
    this.props.toggleIsFetching(true);
    
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageN}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);
      });
  };

  render() {
    return (
            <div className=" box">
              { !this.props.isFetching && <Users
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onFollow={this.onFollow}
                onUnfollow={this.onUnfollow}
                onPageChange={this.onPageChange}
                users={this.props.users}
              /> }

              { this.props.isFetching &&
                Array(5)
                .fill(0)
                .map((_, index) => <UserLoader />)}
              
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
    },
    toggleIsFetching: isFetching => {
      dispatch(toggleIsFetchingtAC(isFetching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
