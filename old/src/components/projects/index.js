import { h, Component } from 'preact';
import cx from 'classnames';
import Project from '../../components/project';
import style from './style.scss';

class Projects extends Component { // eslint-disable-line react-prefer-stateless-function
	sizes = ['2-5', '2-5', '1-5', '3-5', '2-5', '5-5', '1-5', '2-5', '2-5', '2-5', '3-5', '5-5'];

	projects = () => (
		this.props.projects.length ? this.props.projects : this.sizes
	)

	render ({ projects, status }) {
		return (
			<div class={cx(style.projects, 'center')}>
				{
					(status && !projects.length) ||
					(!status && projects.length) ||
					(projects.length) ? (
							this.projects().map((project, i) => (
								<Project size={this.sizes[i % this.sizes.length]} className={cx(style.projects__item)} project={project} key={i} />
							))
						) : <h1>No Projects Found</h1>
				}
			</div>
		);
	}
}

export default Projects;
