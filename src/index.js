import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './view/layouts/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './view/assets/scss/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

