import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorld } from './components/HelloWorld'


ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <HelloWorld user={{name:'Pepe',lastName: 'Done'} } 
    id={ 1 }
    title='Hola mundo'
    
    
    />

  </React.StrictMode>,


)
