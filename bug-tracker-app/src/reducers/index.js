import { combineReducers } from 'redux'
import bugsReducer from '../bugs/reducers'
import projectsReducer from '../projects/reducers'

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
});

export default rootReducer;