import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import bugActionCreators from './bugs/actions';
import projectActionCreators from './projects/actions';

import store from './store';

import BugTracker from './bugs';
import Projects from './projects'

import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);
const projectActionDispatchers = bindActionCreators(projectActionCreators, store.dispatch);

function renderApp(){
    const storeState = store.getState();

    //exracting state for the components
    const bugs = storeState.bugsState;
    const projects = storeState.projectsState;
    
    ReactDOM.render(
        <>
            <h1>Bug Tracker</h1>
            <hr/>
            <Projects projects={projects} {...projectActionDispatchers} />
            <BugTracker bugs={bugs} {...bugActionDispatchers} />
        </>
        , document.getElementById('root')
    );
}
store.subscribe(renderApp);
renderApp();
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
