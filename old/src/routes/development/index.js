import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Projects from '../../components/projects';
import { fetchProjects } from '../../store/actions/projects';

class Development extends Component { // eslint-disable-line react-prefer-stateless-function
	projects = () => this.props.projects.items.filter(project => (
		project.category.indexOf('Development') > -1
	));

	componentDidMount () {
		fetchProjects();
	}

	render ({ projects }) {
		return (
			<Projects
				projects={this.projects()}
				status={projects.isFetching}
			/>
		);
	}
}

const mapStateToProps = (state) => ({ projects: state.projects });

export default connect(mapStateToProps)(Development);
