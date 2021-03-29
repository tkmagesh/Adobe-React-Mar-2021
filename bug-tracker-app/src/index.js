import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 
ES6 Modules
*/

/* import * as calculator from './calc';
//calculator -> module object with references to the public entities
console.log(calculator.add(100,200));
*/

/* 
import * as calculator from './calc';
//const add = calculator.add;
const { add } = calculator;
console.log(add(10000,2000)); */

/* 
import { add } from './calc';
console.log(add(10000,20000)); 
*/

//importing default exported entities (do not use '* as' or '{}' )
import calc from './calc';
console.log(calc.subtract(1000,500));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
