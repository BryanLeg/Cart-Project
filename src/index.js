import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextAPI } from './CartContext'

ReactDOM.render(
    <React.StrictMode>
        <ContextAPI>
            <App />
        </ContextAPI>
    </React.StrictMode>,
    document.getElementById('root')
);