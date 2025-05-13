import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import emailjs from '@emailjs/browser'

// Inicializa o EmailJS com configurações
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

// Configura EmailJS para usar CORS
emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  limited: false,
  cors: 'https://api.emailjs.com'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
