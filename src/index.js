import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css'
import { ContextProvider } from './favContext'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);


