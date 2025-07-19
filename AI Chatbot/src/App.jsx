import { useState } from 'react';
import styles from './App.module.css';
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';

function App() {
  const [messages, setMessages] = useState(MESSAGES);

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
      <Controls />
    </div>
  );
}

const MESSAGES = [
  {
    role: 'user',
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae libero aperiam eum velit? Inventore maxime incidunt nisi cupiditate officia cum vitae recusandae impedit, suscipit dolorum ipsum dolore, aliquam blanditiis?"
  },
  {
    role: 'assistant',
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae libero aperiam eum velit? Inventore maxime incidunt nisi cupiditate officia cum vitae recusandae impedit, suscipit dolorum ipsum dolore, aliquam blanditiis?"
  },
  {
    role: 'user',
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae libero aperiam eum velit? Inventore maxime incidunt nisi cupiditate officia cum vitae recusandae impedit, suscipit dolorum ipsum dolore, aliquam blanditiis?"
  },
  {
    role: 'assistant',
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae libero aperiam eum velit? Inventore maxime incidunt nisi cupiditate officia cum vitae recusandae impedit, suscipit dolorum ipsum dolore, aliquam blanditiis?"
  },
  {
    role: 'user',
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae libero aperiam eum velit? Inventore maxime incidunt nisi cupiditate officia cum vitae recusandae impedit, suscipit dolorum ipsum dolore, aliquam blanditiis?"
  },
  {
    role: 'assistant',
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae libero aperiam eum velit? Inventore maxime incidunt nisi cupiditate officia cum vitae recusandae impedit, suscipit dolorum ipsum dolore, aliquam blanditiis?"
  },
  {
    role: 'user',
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae libero aperiam eum velit? Inventore maxime incidunt nisi cupiditate officia cum vitae recusandae impedit, suscipit dolorum ipsum dolore, aliquam blanditiis?"
  },
  {
    role: 'assistant',
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae libero aperiam eum velit? Inventore maxime incidunt nisi cupiditate officia cum vitae recusandae impedit, suscipit dolorum ipsum dolore, aliquam blanditiis?"
  },
]

export default App
