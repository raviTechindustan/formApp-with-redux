import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Route from './routes';
import './assets/styles/index.scss';
import { Provider } from 'react-redux';
import Reducer from './redux/reducers';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(Reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
