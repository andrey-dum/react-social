import React from 'react';
import './index.scss';
import { MdPublic } from "react-icons/md";
import * as axios from 'axios';

import profilePhoto from '../../assets/images/profile_noimage.png'

class Users extends React.Component {
    constructor(props) {
        super(props);

        if ( this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    console.log(response.data.items)
                    this.props.setUsers(response.data.items)
                })
            
        }
    }

   

    // getUsers = () => {
    //     if ( this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(response => {
    //                 console.log(response.data.items)
    //                 this.props.setUsers(response.data.items)
    //             })
            
    //     } 
    // }

    onFollow = (userId) => {
        this.props.follow(userId)
        console.log('Add friend')
    }

    onUnfollow = (userId) => {
        this.props.unfollow(userId)
    }

    render() {
        return ( 
            <div className="users box">
                <div className="users__list">
                {  this.props.users.map(u => (
                    <div key={u.id} className="user__item">
                        <div className="user__avatar"><img src={u.photos.small ? u.photos.small : profilePhoto } alt={u.name} className=""/></div>
                        <div className="user__info">
                            <div className="user__name">{u.name}</div>
                            <small className="user__status">{u.status}</small>
                        </div>

                        <div className="user__followButtons">
                            

                            { u.followed 
                                ? <div className="unfollow" onClick={() => this.onUnfollow(u.id)}>Unfollow</div> 
                                : <div className="follow" onClick={() => this.onFollow(u.id)}>Follow</div> }
                            
                        </div>
                        
                        {/* <div className="user__location">
                            <MdPublic />
                            <div> 
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div> */}
                    </div>
                )) }

                <div className="users__showMore">
                    <button className="button">Show More</button>
                </div>
                
            </div>
        </div>
        )
        
    }
}
  

export default Users;