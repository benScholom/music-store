import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import songlist from './songlist';

/** import all necesary css/js files and react and import the songlist property to be passed through the App component*/
ReactDOM.render(<App songlist={songlist.results} />, document.getElementById('root'));
registerServiceWorker();

