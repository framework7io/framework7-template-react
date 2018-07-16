// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/cjs/react-dom.production.min';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle';

// Import F7 React Plugin
import Framework7React from 'framework7-react';

// Import main App Component
import App from './components/App.jsx';

// Framework7 styles and icons
import 'framework7/css/framework7.min.css';
import 'framework7-icons/css/framework7-icons.css';
import 'material-design-icons/iconfont/material-icons.css';

// Init F7 React Plugin
Framework7.use(Framework7React);

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'),
);
