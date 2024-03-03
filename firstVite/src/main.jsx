import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Quiz from './quiz.jsx'
import './index.css'
import Challenge from './Challenge.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Quiz/>
    <Challenge/>
  </React.StrictMode>,
)
