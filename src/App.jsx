import React from 'react';

import { Switch, Route } from 'react-router-dom'


import './App.scss';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
// import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



function App() {

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <div className="main-content">
        <Switch>
  
          <Route  path='/dialogs' render={ () => <DialogsContainer /> } />
          
          <Route path='/profile' render={ () => <ProfileContainer /> } />
          {/* <Route path='/' render={ () => <Profile/> } /> */}

          <Route path='/users' render={ () => <UsersContainer /> } />


        </Switch>
      </div>
    
      <Footer />
    </div>
  );
}

export default App;
