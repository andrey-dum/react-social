import React from 'react';

import Header from './Header';
import { connect } from 'react-redux'
import * as axios from 'axios';

import { setAuthUserData } from '../../redux/authReducer';
// import { setUserProfile } from '../../redux/profileReducer';

class HeaderContainer extends React.Component {

  componentDidMount () {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    }).then(response => {
      
      if(response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        this.props.setAuthUserData(id, email, login);
        console.log('Success', id)
       
      //   axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
      //     this.props.setUserProfile(response.data)
      //  })

      }

    })

  
  }
  
  render () {
    return (
      <Header {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
 return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    // profile: state.profilePage.profile,
  }
}

export default connect(mapStateToProps, {
  setAuthUserData,
  // setUserProfile
})(HeaderContainer);