import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import projectActionCreators from './actions';

const Projects = ({projects, load, addNew}) => {
    const [newProjectName, setNewProjectName] = useState('');
    useEffect(() => {
        load();
    }, [load]);

    return (
        <>
            <h3>Projects</h3>
            <label>Project Name :</label>
            <input type="text" onChange={ evt => setNewProjectName(evt.target.value)} />
            <input type="button" value="Add New" onClick={ evt => addNew(newProjectName)} />
            <ol>
                {projects.map(project => (
                    <li key={project.id}>{project.name} </li>
                ))}
            </ol>
        </>
    )
}

function mapStateToProps(storeState){
    const projects = storeState.projectsState;
    return { projects : projects };
}

function mapDispatchToProps(dispatch){
    const projectActionDispatchers = bindActionCreators(projectActionCreators, dispatch);
    return projectActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);