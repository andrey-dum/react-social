import React from 'react';
// import { NavLink } from 'react-router-dom';

import './index.scss';
import { FaRegPaperPlane } from "react-icons/fa";

import DialogItem from './DialogItem';
import Message from './Message';
import AddMessageFormRedux from './AddMessageForm/AddMessageForm';
// import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';



function Dialogs ({dialogsPage, sendMessage, isAuth}) {

    const empty = true;

    const onAddMessage = (values)=>  {
      sendMessage(values.newMessageText)
    }

  //  if (!isAuth) {
  //   return <Redirect to="/login" />
  //  }

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
                dialogsPage.dialogs.map(d => <DialogItem key={d.uid} name={d.name} uid={d.uid} />)
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
                
                   { dialogsPage.messages.map( msg =>  (<div><Message key={msg.id}  message={msg.message} /></div>) ) }
                   
              </div>

              <hr/>

              <AddMessageFormRedux onSubmit={onAddMessage} />
              
          </div>

      </div>

    </div>
  );
}



export default Dialogs;