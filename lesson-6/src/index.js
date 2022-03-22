import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import { Provider } from 'react-redux'
import { store } from './store/store'

import './index.css';


const chats = [
  { id: 1, status: 'status', name: 'Alex', avatar: '/img/avatar/1.jpeg', message: 'description' },
  { id: 2, status: 'status', name: 'Max', avatar: '/img/avatar/1.jpeg', message: 'description' },
  { id: 3, status: 'status', name: 'Din', avatar: '/img/avatar/1.jpeg', message: 'description' },
  { id: 4, status: 'status', name: 'Sam', avatar: '/img/avatar/1.jpeg', message: 'description' },
  { id: 5, status: 'status', name: 'Ben', avatar: '/img/avatar/1.jpeg', message: 'description' },
]


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);


