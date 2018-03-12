import { Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.scss';
import Projects from '../../components/projects';
import { fetchProjectsIfNeeded } from '../../store/actions/projects';

class Design extends Component { // eslint-disable-line react-prefer-stateless-function
	componentDidMount () {
		const { dispatch } = this.props;
		dispatch(fetchProjectsIfNeeded());
	}

	render ({ projects }) {
		let projectsFiltered = [...projects.items.filter(project => (
			project.category.indexOf('Design') > -1
		))];
		return (
			<div class={style.home}>
				<Projects projects={projectsFiltered} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ projects: state.projects });

export default connect(mapStateToProps)(Design);
