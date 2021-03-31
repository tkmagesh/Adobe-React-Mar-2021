import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './components/bugStats';
import BugSort from './components/bugSort';
import BugEdit from './components/bugEdit';
import BugList from './components/bugList';

import bugActionCreators from './actions';

const BugTracker = ({bugs, addNew, remove, toggle, removeClosed, loadBugs}) => {
    return (
        <div>
            <input type="button" value="Load Bugs" onClick={loadBugs} />
            <h3>Bugs</h3>
            <BugStats bugs={bugs} />
            <BugSort />
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </div>
    )
}

function mapStateToProps(storeState){
    const bugs = storeState.bugsState;
    return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);