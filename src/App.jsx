import React from 'react';

import { Switch, Route } from 'react-router-dom'


import './App.scss';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';



function App() {

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <div className="main-content">
        <Switch>
          {/* <Route exact path='/' component={Profile}/> */}
          {/* <Route  path='/dialogs' component={Dialogs}/> */}

  
          <Route  path='/dialogs' render={ () => <DialogsContainer /> } />
          {/* <Route  path='/dialogs' render={ () => <Dialogs state={state.dialogsPage}  store={store} /> } /> */}
          
          <Route exact path='/profile' render={ () => <Profile /> } />
        </Switch>
      </div>
    
      <Footer />
    </div>
  );
}

export default App;
