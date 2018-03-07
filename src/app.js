import { Component } from 'preact';
import { Provider } from 'preact-redux';
import configureStore from './store';
import Router from './router.js';
import { PersistGate } from 'redux-persist/es/integration/react';

if (module.hot) require('preact/debug');

const { persistor, store } = configureStore();

export class App extends Component {
	render() {
		return (
			<div class="app">
				<Provider store={store}>
					<PersistGate persistor={persistor}>
						<Router />
					</PersistGate>
				</Provider>
			</div>
		);
	}
}

export default App;
