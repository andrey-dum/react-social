import React from 'react';
import { Field, reduxForm } from 'redux-form'

import { maxLengthCreator, required } from '../../../utils/validators/validator';
import { Textarea } from '../../../common/FormControls/FormControls';

const maxLength30 = maxLengthCreator(30);


const AddMessageForm = (props) => {
    const { handleSubmit } = props
    return (
      <div className="chat-textarea">
        <form onSubmit={handleSubmit}>
          <Field component={Textarea} validate={[required, maxLength30]} name="newMessageText" required /> 
          <div className="btn-wrap">
            <button className="button">Send</button>
          </div>
        </form>
      </div>
    )
  }
  
  const AddMessageFormRedux = reduxForm({form: 'AddMessageForm'})(AddMessageForm)

  export default AddMessageFormRedux;