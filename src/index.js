/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line no-unused-vars
import App from './App';
import Button from './components/Button';
import AppView from './containers/AppView';
import './assets/styles/components/AppView.scss'
import reportWebVitals from './reportWebVitals';

import './firebase'

ReactDOM.render(
  <React.StrictMode>
    <AppView />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
