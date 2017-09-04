import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import Song from './Song';
import Title from './Title';
import Sortbtn from './Sortbtn';
import Sform from './form';
import $ from 'jquery';
import './vendor/bootstrap/css/bootstrap.css';
import './css/heroic-features.css';
import songlist from './songlist';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App songlist={songlist.results} />, div);
});
