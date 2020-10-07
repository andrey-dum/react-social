import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import store from './redux/redux-store';
// import { Provider } from './context/StoreContext';
import { Provider } from 'react-redux';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      {/* <App state={state} dispatch={store.dispatch.bind(store)} store={store} /> */}
      <App  />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
