import bugApi from '../services/bugApi';

export default function loadBugs(){
    /* return function(dispatch){
        axios
            .get('http://localhost:3030/bugs')
            .then(response => {
                return response.data;
            })
            .then(bugs => {
                const action = { type : 'BUG_INIT', payload : bugs};
                dispatch(action);
            })
        
    } */

    /* return async function(dispatch){
        const response = await axios.get('http://localhost:3030/bugs');
        const bugs = response.data;
        const action = { type : 'BUG_INIT', payload : bugs};
        dispatch(action);
    } */

    /* return async function(dispatch){
        const bugs = await bugApi.getAll();
        const action = { type : 'BUG_INIT', payload : bugs};
        dispatch(action);
    } */

    return bugApi
        .getAll()
        .then(bugs => {
            const action = { type : 'BUG_INIT', payload : bugs};
            return action;
        });
}