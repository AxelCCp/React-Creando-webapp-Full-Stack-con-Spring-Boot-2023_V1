import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles.css'
import { UsersApp } from './UsersApp'

//248
//AuthProvider : se quita esta etiqueta , ya que AuthProvider>era para use context y ahora se va a usar redux.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
        <UsersApp />
      
    </BrowserRouter>
  </React.StrictMode>
)
