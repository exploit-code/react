import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './index.css';


const chats = [
  { id: 1, status: 'status', name: 'Alex', avatar: '/img/avatar/1.jpeg', message: 'description' },
  { id: 2, status: 'status', name: 'Max', avatar: '/img/avatar/1.jpeg', message: 'description' },
  { id: 3, status: 'status', name: 'Din', avatar: '/img/avatar/1.jpeg', message: 'description' },
  { id: 4, status: 'status', name: 'Sam', avatar: '/img/avatar/1.jpeg', message: 'description' },
  { id: 5, status: 'status', name: 'Ben', avatar: '/img/avatar/1.jpeg', message: 'description' },
]



ReactDOM.render(
  <React.StrictMode>
    <App chats={chats} />
  </React.StrictMode>,
  document.getElementById('root')
);


