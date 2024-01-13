import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';


ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <HelloWorldApp user={{name:'Pepe',lastName: 'Done'} } 
    id={ 1 }
    title='Hola mundo'
    
    
    />

  </React.StrictMode>,


)
