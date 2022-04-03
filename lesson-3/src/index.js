import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './index.css';


const chats = [
  { id: 1, status: 'user-1', name: 'Alex', avatar: '/img/avatar/1.jpeg', message: 'user-1-text' },
  { id: 2, status: 'user-2', name: 'Max', avatar: '/img/avatar/1.jpeg', message: 'user-2-text' },
]



ReactDOM.render(
  <React.StrictMode>
    <App chats={chats} />
  </React.StrictMode>,
  document.getElementById('root')
);


