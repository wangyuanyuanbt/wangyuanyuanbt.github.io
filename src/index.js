import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Router from './configs/router'
import { Provider } from 'react-redux'
import store from './redux/index'
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);


