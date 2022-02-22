import { useState, useEffect, useMemo } from 'react';
import styles from './App.module.css';
import Message from './components/Message/Message';


const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [inputText, setInputText] = useState('');

  const messages = useMemo(() => {
    return messageList.map((messageItem, index) => {
      return (
        <p key={messageItem.text + index}>{messageItem.author}: {messageItem.text}</p>
      );
    });
  }, [messageList]);

  useEffect(() => {
    let timer;

    if (messageList.length === 0) return;

    if (messageList[messageList.length - 1].author === 'user') {
      timer = setTimeout(() => {
        setMessageList(messageList => [...messageList, { text: 'Hello User! I am bot', author: 'bot' }]);
      }, 1500);
    }

    return () => clearTimeout(timer);

  }, [messageList]);

  const addMessage = (ev) => {

    ev.preventDefault();

    const text = inputText.trim();

    if (text.length === 0) return;

    setMessageList(messageList => [...messageList, { text, author: 'user' }]);

    setInputText(inputText => '');
  }

  return (
    <div className={styles.App}>
      <Message messageItem={'lesson-2'} />
      <div className={styles.formBox}>
        <form onSubmit={(ev) => addMessage(ev)}>
          <input type="text" value={inputText} onChange={(ev) => setInputText(ev.target.value)} />
          <button type="submit">Отправить</button>
        </form>
      </div>
      <div>{messages}</div>
    </div>
  );
}

export default App;
