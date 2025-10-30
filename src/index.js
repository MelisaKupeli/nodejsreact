import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> yorum satırına almak ya da silmek, 
  // useEffect’in geliştirme sırasında iki kez çalışmasını durdurur. 
  // Önceden StrictMode açıksa, development modunda useEffect iki kez tetiklenirdi 
  // (mount → cleanup → mount tekrar)


  <React.StrictMode>
    <App />
  </React.StrictMode>
);