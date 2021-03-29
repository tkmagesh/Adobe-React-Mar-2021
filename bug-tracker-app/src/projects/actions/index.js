let currentProjectId = 0;

const projectActionCreators = {
    load(){
        const initialProjectsState = [
            /* { id: 1, name: 'Payroll Master' },
            { id: 2, name: 'People Central' } */
        ];
        const loadProjectsAction = { type : 'PROJECTS_LOAD', payload : initialProjectsState };
        return loadProjectsAction;
    },
    addNew(projectName){
        return { type : 'PROJECTS_ADD_NEW', payload : { id : ++currentProjectId, name : projectName } };
    }
}
export default projectActionCreators;