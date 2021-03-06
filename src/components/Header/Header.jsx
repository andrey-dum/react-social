import React from 'react';
import logo from '../../logo.png';

import { Link } from 'react-router-dom';

import './index.scss';

import { MdFace } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";


function Header ({login, isAuth, profile, logout}) {
  const handleLogout = () => {
    logout()
  }
  // console.log(profile)
  return (
    <div className="header box">
      <header className="app-header">
        <div className="header-logo">
            <img src={logo} className="app-logo" alt="logo" />
             <Link
                className="app-link"
                to="/"
                >Bro2Bro
            </Link> 
        </div>
        <div className="header-menu">
        { isAuth 
          ? <div><a href="#"><MdFace />{login}</a><div className="logout" onClick={handleLogout}><AiOutlineLogout />Logout</div></div>
          : <a href="#"><MdFace />Sig In</a> }
          {/* <a href="/"><AiOutlineLogout />Logout</a> */}
         
        </div>
      </header>

      
    </div>
  );
}

export default Header;