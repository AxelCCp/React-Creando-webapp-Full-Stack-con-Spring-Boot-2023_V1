import React from 'react'
import ReactDOM from 'react-dom/client'
import {CounterApp} from './CounterApp.jsx'
import {CounterApp2} from './CounterApp2.jsx'
import {CounterApp3} from './CounterApp3.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />

    <CounterApp2 />

    <CounterApp3 value={1} />

  </React.StrictMode>,
)
