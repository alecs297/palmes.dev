import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './jsx/App';
import './app_tailwind.css';
createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);