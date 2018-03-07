import { BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import Header from './components/header';
import Home from './routes/home';
import Development from './routes/development';
import Design from './routes/design';
import Blog from './routes/blog';

const Routes = () => (
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
);

export default Routes;
