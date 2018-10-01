import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'

import Chat from './components/Chat';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

//const SOCKET_URL = 'https://web-chat-api.herokuapp.com/'
const SOCKET_URL = 'http://localhost:3000/'

ReactDOM.render(
  <Provider store={store}>
    <Chat socketUrl={SOCKET_URL} />
  </Provider>, 
document.getElementById('app'));
