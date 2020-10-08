import React from 'react';
import { Link, NavLink } from 'react-router-dom'

import './index.scss';

function Sidebar () {
  return (
    <div className="sidebar box">
    <nav className="sidebar-nav">
      {/* <NavLink to='/'>Моя страница</NavLink> */}

     {
        [{
          url: '/profile',
          title: 'Моя страница'
        },
        {
          url: '/dialogs',
          title: 'Диалоги'
        }].map((item) => <NavLink key={item.url} to={item.url}>{item.title}</NavLink> )
     }

      
      <Link to='#'>Друзья</Link>
      <Link to="#">Новости</Link>
      <Link to="#">Настройки</Link>

     <hr />

      <Link to="/users">Найти друзей</Link>
      
    </nav>

    {/* <div>
      <h4> Keep in touch</h4>
      <nav className="sidebar-nav">
      <a href="#">instagram</a>
      <a href="#">facebook</a>
      <a href="#">twitter</a>

    </nav>
    </div> */}
          
    </div>
  );
}

export default Sidebar;