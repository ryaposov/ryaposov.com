import { Component } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import Router from './router.js';

if (module.hot) require('preact/debug');

export class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
