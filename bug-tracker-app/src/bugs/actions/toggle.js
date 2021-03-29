export default function toggle(bugToToggle){
    const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
    const replaceAction = { type : 'BUG_TOGGLE', payload : toggledBug };
    return replaceAction;
}