function projectsReducer(currentState = [], action){
    if (action.type === 'PROJECTS_LOAD'){
        return action.payload;
    }
    return currentState;
}
export default projectsReducer;