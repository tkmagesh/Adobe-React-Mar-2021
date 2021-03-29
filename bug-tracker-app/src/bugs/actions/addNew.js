let currentBugId = 0;
export default function addNew(bugName){
    const newBug = {
        id : ++currentBugId,
        name : bugName,
        isClosed : false,
        createdAt : new Date()
    }
    const addNewAction = { type : 'BUG_ADD_NEW', payload: newBug }
    return addNewAction;
}