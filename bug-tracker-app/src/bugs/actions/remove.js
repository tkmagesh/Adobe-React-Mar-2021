import bugApi from '../services/bugApi';
export default function remove(bugToRemove){
    return async function(dispatch){
        await bugApi.remove(bugToRemove);
        const removeAction = { type : 'BUG_REMOVE', payload: bugToRemove };
        dispatch(removeAction);
    }
}