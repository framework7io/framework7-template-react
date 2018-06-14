import 'framework7/dist/css/framework7.ios.min.css';

/* OR for Material Theme:
import 'framework7/dist/css/framework7.md.min.css'
*/

import './css/app.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
