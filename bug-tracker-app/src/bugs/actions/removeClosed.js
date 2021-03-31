import remove from './remove';

export default function removeClosed(){
    return async function(dispatch, getState){
        const storeState = getState();
        const bugs = storeState.bugsState;
        const bugsToRemove = bugs.filter(bug => bug.isClosed);
        bugsToRemove.forEach(bugToRemove => remove(bugToRemove)(dispatch));
    }
}