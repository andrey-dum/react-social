import React from 'react';
import { connect } from "react-redux";
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer';

// import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  
    componentDidMount() {
       
        let userId = this.props.match.params.id;
        if(!userId) {
          userId = this.props.authorizedUserId;
          if(!userId) { 
            this.props.history.push('/login')
          }
        }
        if (userId) {
          this.props.getUserProfile(userId);
          this.props.getStatus(userId);
        }
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}



const mapStateToProps = state => {
    return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authorizedUserId: state.auth.userId,
      isAuth: state.auth.isAuth,
    };
  };



  // const WithRouterProfileContainer = withRouter(ProfileContainer);



  export default connect(mapStateToProps, {
    // setUserProfile,


    getUserProfile,
    getStatus,
    updateStatus
  })(ProfileContainer);