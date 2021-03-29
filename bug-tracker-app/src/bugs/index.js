import BugStats from './components/bugStats';
import BugSort from './components/bugSort';
import BugEdit from './components/bugEdit';
import BugList from './components/bugList';

const BugTracker = ({bugs, addNew, remove, toggle, removeClosed}) => {
    return (
        <div>
            <h3>Bugs</h3>
            <BugStats bugs={bugs} />
            <BugSort />
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </div>
    )
}
export default BugTracker;