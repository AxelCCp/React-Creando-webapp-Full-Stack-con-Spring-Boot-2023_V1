import React from 'react'
import ReactDOM from 'react-dom/client'

import {HelloWorld4_App} from './HelloWorld4_App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <HelloWorld4_App
      user={{name:'Rey', lastname: 'Pilaf'}} 
      id={3} 
      title='Hello... . '
      book = 'El dios del mundo del vacío'
      />
  </React.StrictMode>
)
