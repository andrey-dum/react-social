import React, { useEffect } from 'react';
import './index.scss';
import { MdPublic } from "react-icons/md";

const Users = ({users, follow, unfollow, setUsers}) => {
    
    const data = [
        { id: 1, followed: false, name: 'Sancho', status: 'Hello, bro', location: {city: 'Minsk', country: 'Belarus'}, img: 'https://olympus.crumina.net/wp-content/uploads/avatars/9/5c34850901fc7-bpthumb.jpg'},
        { id: 2, followed: true, name: 'Android', status: 'I want to learn react', location: {city: 'Kyiv', country: 'Ukraine'}, img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'},
        { id: 3, followed: false, name: 'Armen', status: 'I search job', location: {city: 'London', country: 'England'}, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU'},
        { id: 4, followed: true, name: 'Aligator', status: 'Who want play football tomorrow', location: {city: 'NewYork', country: 'USA'}, img: 'https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png'},
        { id: 5, followed: false, name: 'Red', status: 'Go to mountains next week!!!', location: {city: 'Barcelona', country: 'Spain'}, img: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/74/grinning-face_1f600.png'}
     ];

       if ( users.length === 0) {
        setUsers(data)
       } 

    

    const onFollow = (userId) => {
        follow(userId)
    }

    const onUnfollow = (userId) => {
        unfollow(userId)
    }
    
    return (
        <div className="users box">
            <div className="users__list">
                { users.map(u => (
                    <div key={u.id} className="user__item">
                        <div className="user__avatar"><img src={u.img} alt={u.name} className=""/></div>
                        <div className="user__info">
                            <div className="user__name">{u.name}</div>
                            <small className="user__status">{u.status}</small>
                        </div>

                        <div className="user__followButtons">
                            

                            { u.followed 
                                ? <div className="unfollow" onClick={() => onUnfollow(u.id)}>Unfollow</div> 
                                : <div className="follow" onClick={() => onFollow(u.id)}>Follow</div> }
                            
                        </div>
                        
                        <div className="user__location">
                        
                                <MdPublic />
                                <div>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </div>
                        
                        </div>
                    </div>
                )) }

                <div className="users__showMore">
                    <button className="button">Show More</button>
                </div>
                
            </div>
        </div>
    )
}

  

export default Users;