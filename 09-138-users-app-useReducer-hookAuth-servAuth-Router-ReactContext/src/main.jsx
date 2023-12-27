import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {UsersApp} from './UsersApp.jsx'
import './styles.css'
import { LoginPage } from './auth/pages/LoginPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersApp />
    </BrowserRouter>
  </React.StrictMode>,
)
