import BugItem from './bugItem';

const BugList = ({bugs, toggle, remove, removeClosed}) => {
    const bugItems = bugs.map(bug => {
        return (
            <BugItem key={bug.id} {...{ bug, toggle, remove }} />
        )
    })
    return (
        <section className="list">
            <ol>
                {bugItems}
            </ol>
            <input type="button" value="Remove Closed" onClick={removeClosed} />
        </section>
    )
}
export default BugList;