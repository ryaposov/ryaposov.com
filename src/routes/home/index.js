import { Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.scss';
import Projects from '../../components/projects';
import { fetchProjectsIfNeeded } from '../../store/actions/projects';

class Home extends Component { // eslint-disable-line react-prefer-stateless-function
	async componentDidMount () {
		const { dispatch } = this.props;
		await dispatch(fetchProjectsIfNeeded());
	}

	render ({ projects }) {
		let projectsFiltered = [...projects.items];
		return (
			<div class={style.home}>
				<Projects projects={projectsFiltered} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ projects: state.projects });

export default connect(mapStateToProps)(Home);
