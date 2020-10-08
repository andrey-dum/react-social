import React from 'react';

import { followActionCreator, unfollowActionCreator, setUsersAC } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';



const mapStateToProps = (state) => {
    return {
      users: state.usersPage.users,
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
      }
    }
  }
  
  

export default connect(mapStateToProps, mapDispatchToProps)(Users);