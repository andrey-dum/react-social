import React from 'react';
// import { NavLink } from 'react-router-dom';

import './index.scss';
import { FaRegPaperPlane } from "react-icons/fa";

import DialogItem from './DialogItem';
import Message from './Message';
// import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';



function Dialogs ({state, updateMessage, addMessage}) {
    const empty = true;

    let isEmptyMessage = state.NewMessageText === '' ? true : false

    const onUpdateMessage = (e) =>  {
      let msg = e.target.value;
      updateMessage(msg)
    }

    const onAddMessageClick = ()=>  {
      addMessage()
    }

  return (
    <div className="dialogs-page box">

    { !empty && <div className="empty-dialogs">
        <div className="empty">
            <FaRegPaperPlane />
        </div> 
        <div className="empty-title"> Ваши сообщения</div>
        Отправляйте личные фото и сообщения другу или группе
   </div>
    }


<div className="dialogs-wrapper">

          <div className="dialogs">
              <div className="dialogs-header">
                  Direct
              </div>

              {
                state.dialogs.map(d => <DialogItem key={d.uid} name={d.name} uid={d.uid} />)
              }
              
          </div>

            <div className="chat">
              <div className="chat-header">
                  Sanya
              </div>

              <div className="chat-body">
                  {/* <div className="l-message">
                   
                  </div>
                  <div className="r-message">
                    <Message message='Hello!!!' />
                  </div> */}
                
                   { state.messages.map( msg =>  (<div><Message key={msg.id}  message={msg.message} /></div>) ) }
                   
              </div>

              <hr/>

              <div className="chat-textarea">
              
                <textarea onChange={ onUpdateMessage } value={state.NewMessageText} required /> 
                <div className="btn-wrap">
                  <button className="button" disabled={isEmptyMessage} onClick={ onAddMessageClick } >Send</button>
                 </div>
              </div>
              
          </div>

      </div>

    </div>
  );
}

export default Dialogs;