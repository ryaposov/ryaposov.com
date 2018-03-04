import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import state from './state';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
let initialState  = persistedState || state;

const composeEnhancers =
  typeof window === 'object' &&
	  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  		// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  	}) : compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(throttle(() => {
	saveState({
		todos: store.getState().todos
	});
}, 1000));

export default store;
