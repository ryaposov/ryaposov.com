import Header from './components/header';
import Footer from './components/footer';
import Home from './routes/home';
import Development from './routes/development';
import Project from './routes/project';
import Design from './routes/design';
import Blog from './routes/blog';
import Post from './routes/post';
import Page404 from './routes/404';

import { Component } from 'preact';
import { Router } from 'preact-router';

if (module.hot) {
	require('preact/debug');
}

class Routes extends Component {
	handleRoute = (e) => {
		// TEMP: until fix found
		document.body.scrollTop = 0;
	};

	render() {
		return (
			<div class="wrapper">
				<Header />
				<div class="wrapper__content">
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Development path="/development/" />
						<Design path="/design/" />
						<Project path="/project/:id/" />
						<Post path="/blog/:id/" />
						<Blog path="/blog/" />
						<Page404 default path="*" />
					</Router>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Routes;
