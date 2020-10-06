import React from 'react';

import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../context/StoreContext';

//import './index.scss';



function DialogsContainer () {

  return (
    <StoreContext.Consumer> 
    {
      (store) => {
        let state = store.getState().dialogsPage;
  
        const updateMessage = (msg) => {
          store.dispatch(updateNewMessageTextActionCreator(msg));
        }

        const addMessage = ()=>  {
          store.dispatch(addMessageActionCreator())
        }

        return <Dialogs state={state} updateMessage={updateMessage}  addMessage={addMessage}  />
      }
    }
      
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;