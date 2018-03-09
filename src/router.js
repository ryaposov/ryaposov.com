import { BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Home from './routes/home';
import Development from './routes/development';
import Project from './routes/project';
import Design from './routes/design';
import Blog from './routes/blog';
import Post from './routes/post';

const Routes = () => (
	<Router>
		<div class="wrapper">
			<Header />
			<div class="wrapper__content">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/development/" component={Development} />
					<Route path="/design/" component={Design} />
					<Route path="/project/:id/" component={Project} />
					<Route path="/blog/:id/" component={Post} />
					<Route path="/blog/" component={Blog} />
				</Switch>
			</div>
			<Footer />
		</div>
	</Router>
);

export default Routes;
