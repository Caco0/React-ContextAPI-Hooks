import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/templates/home/App';
import { CounterContextProvider } from './context/CounterContexts/';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>
);
