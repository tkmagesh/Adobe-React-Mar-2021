import bugApi from '../services/bugApi';
export default function toggle(bugToToggle){
    return async function(dispatch){
        const toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        const toggledBug = await bugApi.save(toggledBugData);
        const replaceAction = { type : 'BUG_TOGGLE', payload : toggledBug };
        dispatch(replaceAction);
    }
}