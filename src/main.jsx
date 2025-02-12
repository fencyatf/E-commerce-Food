import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
//import { BrowserRouter } from 'react-router-dom'
import React from "react";

createRoot(document.getElementById('root')).render(
    <React.StrictMode> 
    <App />
    </React.StrictMode>
)
