import React from 'react'
import './i18n';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"

// Функция регистрации воркера
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    navigator.serviceWorker.register('/registerSW.js')
      .then((reg) => console.log('Service Worker успешно зарегистрирован:', reg.scope))
      .catch((err) => console.error('Ошибка регистрации Service Worker:', err));
  }
};

// Безопасный запуск строго после полной загрузки страницы
if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') {
    registerServiceWorker();
  } else {
    window.addEventListener('load', registerServiceWorker);
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)