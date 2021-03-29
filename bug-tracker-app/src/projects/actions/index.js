const projectActionCreators = {
    load(){
        const initialProjectsState = [
            { id: 1, name: 'Payroll Master' },
            { id: 2, name: 'People Central' }
        ];
        const loadProjectsAction = { type : 'PROJECTS_LOAD', payload : initialProjectsState };
        return loadProjectsAction;
    }
}
export default projectActionCreators;