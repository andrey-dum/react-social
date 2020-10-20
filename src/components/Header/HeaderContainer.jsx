import React from 'react';

import Header from './Header';
import { connect } from 'react-redux'

import { setAuthUserData, getAuthUserData, logout} from '../../redux/authReducer';
// import { setUserProfile } from '../../redux/profileReducer';

class HeaderContainer extends React.Component {

  componentDidMount () {

    // this.props.getAuthUserData()
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
  // setUserProfile,

  getAuthUserData,
  logout
})(HeaderContainer);