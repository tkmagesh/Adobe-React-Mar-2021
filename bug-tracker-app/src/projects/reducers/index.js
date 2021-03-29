function projectsReducer(currentState = [], action){
    if (action.type === 'PROJECTS_LOAD'){
        return action.payload;
    }
    if (action.type === 'PROJECTS_ADD_NEW'){
        return [...currentState, action.payload]
    }
    return currentState;
}
export default projectsReducer;