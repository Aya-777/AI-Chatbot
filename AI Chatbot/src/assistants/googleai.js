import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

export class Assistant{

  #chat;

  constructor(model= "gemini-1.5-flash"){
    const gemini = ai.getGenerativeModel({ model });
    this.#chat = gemini.startChat({history: []});
  }

  async chat(content){
    try {
      const res = await this.#chat.sendMessage(content);
      return res.response.text();
    } catch (error) {
      throw error;
    }
  }
}