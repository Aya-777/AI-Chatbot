import { useState } from 'react';
import styles from './App.module.css';
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);
const gemini = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
const chat = gemini.startChat({history: []});

function App() {
  const [messages, setMessages] = useState([]);

  function addMessage(message){
    setMessages((prevMessages) => [...prevMessages, message]);

  }

  async function handleSend(content){
    addMessage({content, role: "user"});
    try {
      const res = await chat.sendMessage(content);
      addMessage({ content: res.response.text(), role: "assistant"});

    } catch (error) {
      addMessage({content: "Sorry, I couldn't process your request, Please try again." , role: "system"})
    }
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
