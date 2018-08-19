import React from 'react';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';


var defaultState = {
  list: [{
    tasks: [],
    isHidden: false
  }]
};

const store = createStore(todoApp, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



