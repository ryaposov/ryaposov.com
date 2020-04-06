import { createStore } from 'redux';
import rootReducer from './reducer';

let store;

if (process.env.NODE_ENV === 'production') {
	store = createStore(rootReducer);
} else {
	const { applyMiddleware } = require('redux');
	const thunkMiddleware = require('redux-thunk').default;
	const { createLogger } = require('redux-logger');
	const loggerMiddleware = createLogger();
	store = createStore(
		rootReducer,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	);
}

export default store;
