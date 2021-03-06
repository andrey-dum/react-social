import React, { lazy } from 'react';

import { Switch, Route } from 'react-router-dom'
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


import { connect } from "react-redux";
import { initializeApp } from './redux/appReducer';
import LoadingScreen from './common/LoadingScreen';
import { Redirect } from 'react-router-dom';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

  catchAllErrors = (reason, promise) => {
    alert("Some error")
    //create d(thunk) -> {d(action.show) setTimeout d(hide)}  in app-reducer/ catch error and show in the page
  }
  
  componentDidMount () {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.catchAllErrors)
  }
  componentWillUnmount () {
    window.removeEventListener("unhandledrejection", this.catchAllErrors)
  }

  render () {
    if (!this.props.initialized) {
      return <LoadingScreen />;
    }

    return (
      <div className="app">
        <HeaderContainer />
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route exact path='/' component={() => <Redirect to="/profile" />} /> 

            <Route  path='/dialogs' render={ () => (<React.Suspense fallback={<LoadingScreen />}>
                <DialogsContainer />
              </React.Suspense>
              ) } />

              <Route path='/profile/:id?' component={ProfileContainer} /> 

              <Route path='/users' render={ () => <UsersContainer /> } />
              <Route path='/login' component={Login} /> 

              <Route path='*' render={ () => <div><h1>404 NOT FOUND</h1></div> } />
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
