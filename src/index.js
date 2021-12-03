import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import './App.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './components/stores/indexx'








const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
    <App />
    </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
);

