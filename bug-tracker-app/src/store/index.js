import { createStore } from 'redux';
import rootReducer from '../reducers'
import appMiddlewares from './middlewares';

const store = createStore(rootReducer, appMiddlewares);
export default store;