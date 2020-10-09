import React from 'react';

import { followActionCreator, unfollowActionCreator, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';



const mapStateToProps = (state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,

    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      follow: (userId) => {
        dispatch(followActionCreator(userId));
      },
      unfollow: (userId) => {
        dispatch(unfollowActionCreator(userId));
      },
      setUsers: (users) => {
        dispatch(setUsersAC(users));
      },
      setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber));
      },
      setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount));
      }
    }
  }
  
  

export default connect(mapStateToProps, mapDispatchToProps)(Users);