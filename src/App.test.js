import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import songlist from './songlist';
/**
 * @description tests the App componenet y trying to render it in isolation
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App songlist={songlist.results} />, div);
});
