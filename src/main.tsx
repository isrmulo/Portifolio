import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import emailjs from '@emailjs/browser'

// Inicializa o EmailJS com configurações adicionais
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY, {
  cors: true, // Habilita CORS
  strict: true, // Modo estrito para melhor tratamento de erros
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
