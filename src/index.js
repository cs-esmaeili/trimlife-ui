import React from 'react';
import ReactDOM from 'react-dom/client';
import Detector from './view/layouts/Detector';
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './view/assets/scss/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store} >
    <BrowserRouter>
      <Detector />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

