import { Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.scss';
import Projects from '../../components/projects';
import { fetchProjects } from '../../store/actions/projects';

class Design extends Component { // eslint-disable-line react-prefer-stateless-function
	componentDidMount () {
		fetchProjects();
	}

	render ({ projects }) {
		return (
			<div class={style.home}>
				<Projects
					projects={projects.items.filter(project => project.category.indexOf('Design') > -1)}
					status={projects.isFetching}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ projects: state.projects });

export default connect(mapStateToProps)(Design);
