import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faKey,
  faCalendarAlt,
  faBoxOpen,
  faPowerOff
} from '@fortawesome/free-solid-svg-icons';
import App from './App';
import './app.css';
import * as serviceWorker from './serviceWorker';

library.add(
  faEnvelope,
  faKey,
  faCalendarAlt,
  faBoxOpen,
  faPowerOff
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
