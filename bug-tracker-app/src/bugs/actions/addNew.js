import bugApi from '../services/bugApi';

export default function addNew(bugName){
    return async function(dispatch){
        const newBugData = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        const newBug = await bugApi.save(newBugData);
        const addNewAction = { type : 'BUG_ADD_NEW', payload: newBug }
        dispatch(addNewAction);
    }
}