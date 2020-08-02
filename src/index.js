import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// css base
import './styles/settings/colors.css'
import './styles/reset.css'

// desenhando na tela
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);