import React from "react";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";
import * as axios from "axios";
import UserLoader from "./UserLoader";

class UsersContainer extends React.Component {
  // constructor(props) {
  //     super(props);
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


export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
