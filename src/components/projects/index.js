import { Component } from 'preact';
import cx from 'classnames';
import Project from '../../components/project';
import style from './style.scss';

class Projects extends Component { // eslint-disable-line react-prefer-stateless-function
	render ({ projects }) {
		return (
			<div class={cx(style.projects, 'center')}>
				{ projects.map(project => (
					<Project className={cx(style.projects__item)} project={project} />
				) )}
			</div>
		);
	}
}

export default Projects;
