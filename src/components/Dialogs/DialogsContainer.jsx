import React from 'react';

import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';

//import './index.scss';



function DialogsContainer ({store}) {
 
  let state = store.getState().dialogsPage;
  
  const updateMessage = (msg) => {
    store.dispatch(updateNewMessageTextActionCreator(msg));
  }

  const addMessage = ()=>  {
    store.dispatch(addMessageActionCreator())
  }

  return (
    <Dialogs state={state} updateMessage={updateMessage}  addMessage={addMessage}  />
  );
}

export default DialogsContainer;