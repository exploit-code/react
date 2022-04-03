import React from 'react';
import './App.scss';
import Message from './components/Message/Message';

function App() {
  return (
    <div className='App'>
      <Message message={'Привет, друг!'} />
    </div>
  );
}

export default App;
