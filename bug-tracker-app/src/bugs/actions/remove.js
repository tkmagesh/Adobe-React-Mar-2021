export default function remove(bugToRemove){
    const removeAction = { type : 'BUG_REMOVE', payload: bugToRemove };
    return removeAction
}