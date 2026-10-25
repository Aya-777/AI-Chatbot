# AI Chatbot

A simple web-based AI chatbot built with React and Vite. It sends messages to Google's Gemini API and displays the conversation in a clean chat interface.

## Features

- Chat with a Gemini model using the Google Generative AI SDK.
- Send a message with **Enter**; use **Shift + Enter** to add a new line.
- See your messages and assistant replies in the conversation.
- Show a friendly error message if an AI request fails.

## Requirements

- Node.js **20.19+** or **22.12+** (required by Vite 7).
- npm.
- A Google AI Studio API key with access to the model configured by the app.

## Getting started

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create a `.env.local` file in the project root and add your API key:

   ```env
   VITE_GOOGLE_AI_API_KEY=your_google_ai_studio_api_key
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open the local URL printed in the terminal (usually `http://localhost:5173`).

Restart the development server after changing `.env.local`.

## Configuration

The Google AI integration is in `src/assistants/googleai.js`. It reads `VITE_GOOGLE_AI_API_KEY` and sets the Gemini model there. If requests fail, check that the key is valid, has access to the configured model, and has not exceeded its quota. The app logs technical errors to the browser developer console.

> **Security note:** Vite exposes variables prefixed with `VITE_` in the browser bundle. This setup is suitable for local development, but it does not keep an API key secret in a deployed public app. For production, send requests through a backend that stores the key securely.

## Project structure

```text
public/                 Static assets
src/
  assistants/           Gemini API integration
  components/
	 Chat/               Conversation display
	 Controls/           Message input and send button
  App.jsx               App state and message flow
  main.jsx              React entry point
```

## Available scripts

| Command       | Description                                              |
| ------------- | -------------------------------------------------------- |
| `npm run dev` | Start the Vite development server                        |
| `npm test`    | Placeholder only; automated tests are not configured yet |

## Troubleshooting

- **API key missing or rejected:** Confirm the variable name is exactly `VITE_GOOGLE_AI_API_KEY`, check the key in Google AI Studio, and restart Vite.
- **Model or quota error:** Verify that your key can access the model configured in `src/assistants/googleai.js` and that API usage is available.
- **The page does not load:** Check the terminal for Vite errors, then try `npm install` and `npm run dev` again.
