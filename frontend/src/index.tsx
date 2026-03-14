import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './defaults.css';
import Shop from './Shop';

if (window.Pi) {
  window.Pi.init({ version:"2.0",sandbox:true });
}

ReactDOM.render(
  <React.StrictMode>
    <Shop />
  </React.StrictMode>,
  document.getElementById('root')
);
