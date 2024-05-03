import React from 'react'
import ReactDOM from 'react-dom/client'
import  Counter from './Counter';
import './style.css';





ReactDOM.createRoot(document.getElementById('root')).render(

     

        <React.StrictMode>
        <Counter values={20} />

        </React.StrictMode>


)

