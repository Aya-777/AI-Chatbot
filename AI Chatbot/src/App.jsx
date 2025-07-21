import { useState } from 'react';
import styles from './App.module.css';
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';
// import { GoogleGenAI } from "@google/genai";

// const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;

// if (!apiKey) {
//   throw new Error("API key is missing. Check your .env file and Vite config.");
// }

// const ai = new GoogleGenAI({apiKey: apiKey});
// const gemini = ai.models.generateContent({
//   model: "gemini-1.5-flash"
// });
// const chat = gemini.startChat({history: []});

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
        <img className={styles.Logo} src="/chat-bot.png" />
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
