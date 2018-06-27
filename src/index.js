import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7React from 'framework7-react';

import App from './components/App.jsx';

import 'framework7/css/framework7.min.css';
import './css/app.css';
import './css/icons.css';

Framework7.use(Framework7React);

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'),
);
