let StateManager = (function(){
    let _currentState = undefined,
        _subscriptionFns = [],
        _reducer = undefined,
        _init_action = { type : '@@INIT-ACTION' };

    function getState(){
        return _currentState;
    }

    function subscribe(subscriptionFn){
        _subscriptionFns.push(subscriptionFn);
    }

    function notifyChanges(){
        _subscriptionFns.forEach(subscriptionFn => subscriptionFn());
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        notifyChanges();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('A reducer is mandatory to create the store!');
        _reducer = reducer;
        //initializing the currentState with a valid default state
        _currentState = _reducer(_currentState, _init_action);
        let store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore }
})()