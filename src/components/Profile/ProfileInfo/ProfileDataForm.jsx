import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../../common/FormControls/FormControls';
import { required } from '../../../utils/validators/validator';

const ProfileDataForm = ({profile, error, ...props}) => {
    return (
        <form className="ProfileDataForm" onSubmit={props.handleSubmit}>
            <button>Save</button>
            { error && <div className="error">{error}</div> }
            {}
            <b>Full Name</b>
            <div><Field validate={[required]} name={"fullName"} component={Input} type="text" /></div>
            
            <hr/>
           
            <div>
                <div><b>Ищу работу</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
                <div><Field  validate={[]} name={"lokkingForAJob"} component={Input} type="checkbox" /></div>
                <div><b>Проф скиллс</b>: {profile.lookingForAJobDescription}</div>
                <div><Field placeholder='My professional skills' validate={[]} name={"MySkills"} component={Textarea} /></div>
                <div><b>About Me</b></div>
                <div><Field placeholder='About Me' validate={[]} name={"aboutMe"} component={Textarea} /></div>
                {Object.keys(profile.contacts)
                    .map(key => <div key={key}><b>{key}</b>: <Field placeholder={key} validate={[]} name={"contacts." + key} component={Input} type="text" /></div>)} 
            </div>
        
    </form>
    )
}

const ProfileDataFormRedux = reduxForm({
    // a unique name for the form
    form: 'edit-profile'
  })(ProfileDataForm)

export default ProfileDataFormRedux;
