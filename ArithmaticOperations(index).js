import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './HooksCounter';
import "../src/ArithmaticOperations.css"
import ArithmeticOperations from './ArithmaticOperations';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

    
    <ArithmeticOperations/>
  </React.StrictMode>
);


reportWebVitals();