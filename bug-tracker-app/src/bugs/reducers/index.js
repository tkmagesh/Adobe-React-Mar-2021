function bugsReducer(currentState = [], action){
    if (action.type === 'BUG_ADD_NEW'){
        const newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'BUG_REMOVE'){
        const bugToRemove = action.payload;
        const newState = currentState.filter(bug => bug.id !== bugToRemove.id);
        return newState;
    }
    if (action.type === 'BUG_TOGGLE'){
        const newState = currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
        return newState;
    }
    if (action.type === 'BUG_INIT'){
        return action.payload;
    }
    return currentState;
}

export default bugsReducer;