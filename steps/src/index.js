import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { Counter, Question } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Counter/>
    <Question/>
    
  </React.StrictMode>
);

