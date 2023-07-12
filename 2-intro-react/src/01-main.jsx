import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const h1 = React.createElement('h1', null, 'Hola mundo');
const div1 = React.createElement('div', null, React.createElement('ul', null, 'item 1'));

const a = <div><ul><li></li>Hola mundo!...</ul></div>;

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  //<div>Hola mundo!</div>

  //h1,
  //div1,
  a

)
