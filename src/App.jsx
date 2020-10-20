import React from 'react';

import { Switch, Route } from 'react-router-dom'
import './App.scss';
import logo from './logo.png';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

import { connect } from "react-redux";
import { initializeApp } from './redux/appReducer';


class App extends React.Component {

  componentDidMount () {
    this.props.initializeApp()
  }

  render () {
    if (!this.props.initialized) {
      return <div className="loadingScreen"><div><img src={logo} /></div><h1>LOADING</h1></div>
    }

    return (
      <div className="app">
        <HeaderContainer />
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route  path='/dialogs' render={ () => <DialogsContainer /> } />
            <Route path='/profile/:id?' component={ProfileContainer} /> 
            <Route path='/users' render={ () => <UsersContainer /> } />
            <Route path='/login' component={Login} /> 
          </Switch>
        </div>
      
        <Footer />
      </div>
    );
  }
  
}



// function App() {

//   return (
//     <div className="app">
//       <HeaderContainer />
//       <Sidebar />
//       <div className="main-content">
//         <Switch>
  
//           <Route  path='/dialogs' render={ () => <DialogsContainer /> } />
          
//           <Route path='/profile/:id?' component={ProfileContainer} /> 
//           {/* <Route path='/profile' render={ () => <ProfileContainer /> } /> */}
//           {/* <Route path='/' render={ () => <Profile/> } /> */}

//           <Route path='/users' render={ () => <UsersContainer /> } />

//           <Route path='/login' component={Login} /> 

//         </Switch>
//       </div>
    
//       <Footer />
//     </div>
//   );
// }
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})



export default connect(mapStateToProps, {initializeApp})(App)
