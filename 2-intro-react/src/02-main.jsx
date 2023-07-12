import React from 'react'
import ReactDOM from 'react-dom/client'
import {HelloWorld1} from './components/HelloWorld1';
import {HelloWorld2} from './components/HelloWorld2';
import {HelloWorld3} from './components/HelloWorld3';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld1 user={'Pepa'} id={1}/>
    <HelloWorld2 user={'Erika'} id={2}/>
    <HelloWorld3 user={{name:'Rey', lastname: 'Pilaf'}} id={3}/>
  </React.StrictMode>
)
