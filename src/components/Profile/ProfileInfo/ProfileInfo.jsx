import React, { useState } from 'react';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';

//import './index.scss';


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)

    if(!profile) {
        return <div><h1>Loading</h1></div>
    }

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const handleActivateEditMode = () => {
        setEditMode(true)
    }

    const handleOnSubmit = (formData) => {
        saveProfile(formData);
        //setEditMode(false);
    }

    return (
        <div className="profile__info-wrapper box">
          
            {/* <div className="profile-cover">
                <img src="https://scontent.fdnk6-2.fna.fbcdn.net/v/t31.0-0/p180x540/24059526_309567912874753_1684830079788183314_o.jpg?_nc_cat=107&_nc_sid=e3f864&_nc_ohc=aEJH72FGwAsAX-jo5-w&_nc_ht=scontent.fdnk6-2.fna&tp=6&oh=2004ab963e02328c02d2a063cf9a62cf&oe=5F942BA3" alt=""/>
            </div> */}

            <div className="profile-meta">
                <div>
                    <div className="profile-photo">
                        <img src={profile.photos.large || 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/grinning-face_1f600.png'} alt='avatar' />
                    </div>
                    <div>{ isOwner && <input type="file" onChange={onAvatarSelected} />  }</div>
                </div>

                <h2 className="profile-name">{profile.fullName}</h2>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
            <hr/>

            { editMode 
                    ? <ProfileDataForm initialValues={profile} onSubmit={handleOnSubmit} profile={profile} /> 
                    : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={handleActivateEditMode} />}
        </div>   
    );
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return (
        <div className="profile-info">
            {isOwner && <button onClick={activateEditMode}>Edit</button>}
            <h2 className="profile-name">{profile.fullName}</h2>
           
            <h2 className="profile-name">{profile.aboutMe}</h2>
            <div>
                <div><b>Ищу работу</b>: {profile.lookingForAJob}</div>
                { profile.lookingForAJob && <div><b>Проф скиллс</b>: {profile.lookingForAJobDescription}</div> }

                {Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}
                
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return (
        <div><b>{contactTitle}</b>: {contactValue}</div>
    )
}

export default ProfileInfo;
