console.log('From index.js');
const redux = require('redux');
const createStore = redux.createStore;
/**
 * Three Core concepts:
 *
 * A store that holds the state of you applications.
 * An action that describes the chnages in the state of the applications
 * A reducer which actually carries out the state transisition depending on the action.
 */

// Action:
// Is an object with type property

const BUY_CAKE = 'BUY_CAKE';

// Action Creator

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action',
    };
}

// Reducer:
// (previousState, action) => newState

const inintialState = {
    numOfCakes : 10
}

const reducer = (state = inintialState, action) => {
   switch (action.type) {
    case BUY_CAKE: return {
        ...state,
        numOfCakes: state.numOfCakes - 1
    }

    default: return state
   }
}

const store = createStore(reducer);
console.log('Initial state',store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();



