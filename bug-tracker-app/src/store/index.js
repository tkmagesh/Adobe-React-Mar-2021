import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'

/* 
function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.group('Before');
            console.log(store.getState());
            console.groupEnd();
            console.log(action);
            next(action);
            console.group('After');
            console.log(store.getState());
            console.groupEnd();
            console.groupEnd();
        }
    }
} 
*/

const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.group('Before');
    console.log(store.getState());
    console.groupEnd();
    console.log(action);
    next(action);
    console.group('After');
    console.log(store.getState());
    console.groupEnd();
    console.groupEnd();
};

const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        return action(store.dispatch);
    }
    return next(action);
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));
export default store;