import { useState } from 'react';
import styles from './App.module.css';
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';

function App() {
  const [messages, setMessages] = useState([]);

  function handleSend(content){
    setMessages((prevMessages) => [...prevMessages, {
      content,
      role: 'user'
    }]);
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="./public/chat-bot.png" />
        <h2 className={styles.Title}>
          AI Chatbot
        </h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleSend}/>
    </div>
  );
}
export default App
