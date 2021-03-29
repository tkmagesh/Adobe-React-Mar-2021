export default function removeClosed(bugs /* TO BE FIXED */){
    const bugToRetain = bugs.filter(bug => !bug.isClosed);
    const bugInitAction = { type : 'BUG_INIT', payload : bugToRetain };
    return bugInitAction;
}