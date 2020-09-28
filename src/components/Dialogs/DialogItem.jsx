import React from 'react';
import { NavLink } from 'react-router-dom'

//import './index.scss';

const DialogItem = ({name, uid}) => {
    return (
        <div className="dialog-item">
            <NavLink to={`/dialogs/${uid}`}>{name}</NavLink> 
        </div>
  
    );
}

export default DialogItem
