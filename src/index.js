/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line no-unused-vars
import TakeOrder from './pages/TakeOrder';
import Kitchen from './pages/Kitchen';
import Login from './pages/Login'
import App from './components/App'
import './assets/styles/components/AppView.scss'
import reportWebVitals from './reportWebVitals';
import Waiter from './pages/Waiter'
import './firebase'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
