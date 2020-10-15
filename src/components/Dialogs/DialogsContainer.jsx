import React from 'react';

import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
// import StoreContext from '../../context/StoreContext';

import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


//import './index.scss';



// function DialogsContainer () {

//   return (
//     <StoreContext.Consumer> 
//     {
//       (store) => {
//         let state = store.getState().dialogsPage;
  
//         const updateMessage = (msg) => {
//           store.dispatch(updateNewMessageTextActionCreator(msg));
//         }

//         const sendMessage = ()=>  {
//           store.dispatch(addMessageActionCreator())
//         }

//         return <Dialogs state={state} updateMessage={updateMessage}  sendMessage={sendMessage}  />
//       }
//     }
      
//     </StoreContext.Consumer>
//   );
// }


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (msg) => {
      dispatch(updateNewMessageTextActionCreator(msg));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}


// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

// export default DialogsContainer;