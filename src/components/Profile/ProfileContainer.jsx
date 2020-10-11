import React from 'react';
import { connect } from "react-redux";
import * as axios from "axios";
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';

// import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  
    componentDidMount() {
       
        let userId = this.props.match.params.id;
        if(!userId) {
          userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
           this.props.setUserProfile(response.data)
        })
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}



const mapStateToProps = state => {
    return {
      profile: state.profilePage.profile,
    };
  };



  // const WithRouterProfileContainer = withRouter(ProfileContainer);



  export default connect(mapStateToProps, {
    setUserProfile
  })(ProfileContainer);