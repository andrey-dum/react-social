import React from 'react';

//import './index.scss';

const ProfileInfo = ({profile}) => {
    if(!profile) {
        return <div><h1>Loading</h1></div>
    }
    console.log(profile)
    return (
        <div className="profile__info-wrapper box">
            <div className="profile-cover">
                <img src="https://scontent.fdnk6-2.fna.fbcdn.net/v/t31.0-0/p180x540/24059526_309567912874753_1684830079788183314_o.jpg?_nc_cat=107&_nc_sid=e3f864&_nc_ohc=aEJH72FGwAsAX-jo5-w&_nc_ht=scontent.fdnk6-2.fna&tp=6&oh=2004ab963e02328c02d2a063cf9a62cf&oe=5F942BA3" alt=""/>
            </div>

            <div className="profile-meta">
                <div className="profile-photo">
                    <img src={profile.photos.large} />
                </div>
                <div className="profile-info">
                    <h2 className="profile-name">{profile.fullName}</h2>
                    <div>{profile.aboutMe}</div>
                    {/* <div>web-development, design, branding, 3d-visualization</div> */}
                    <div>Date: 20.08.1992</div>
                    <div>City: Kyiv</div>
                    <div>Website: site.com</div>
                </div>
            </div>
        </div>   
    );
}

export default ProfileInfo;
