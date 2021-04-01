import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import BugTracker from './bugs';
import Projects from './projects'
import Home from './home';

import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <Router>
          <h1>Bug Tracker</h1>
        <hr/>
        <div>
        
          <div>
            <span>
              [ <Link to="/">Home</Link> ]
            </span>
            <span>
              [ <Link to="/bugs">Bugs</Link> ]
            </span>
            <span>
              [ <Link to="/projects">Projects</Link> ]
            </span>
          </div>
        <Switch>
          <Route path="/bugs">
            <BugTracker />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
    , document.getElementById('root')
);


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
/* 
import calc from './calc';
console.log(calc.subtract(1000,500));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
