import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Projects from '../../components/projects';
import { fetchProjects } from '../../store/actions/projects';

class Home extends Component { // eslint-disable-line react-prefer-stateless-function
	componentDidMount () {
		fetchProjects();
	}

	render ({ projects }) {
		return (
			<Projects projects={projects.items} status={projects.isFetching} />
		);
	}
}

const mapStateToProps = (state) => ({ projects: state.projects });

export default connect(mapStateToProps)(Home);
