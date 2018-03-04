import { h, Component } from 'preact';
import { BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import { Provider } from 'preact-redux';

import store from '../store';

import Header from './header';
import Home from '../routes/home';
import Development from '../routes/development';
import Design from '../routes/design';
import Blog from '../routes/blog';

// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug');
}

export class App extends Component {
	render() {
		return (
			<div class="app">
				<Provider store={store}>
					<Router>
						<div class="views">
							<Header />
							<Switch className={'views'}>
								<Route exact path="/" component={Home} />
								<Route path="/development/" component={Development} />
								<Route path="/design/" component={Design} />
								<Route path="/blog/" user="me" component={Blog} />
							</Switch>
						</div>
					</Router>
				</Provider>
			</div>
		);
	}
}

export default App;
