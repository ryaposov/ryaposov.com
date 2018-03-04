import { h } from 'preact';
import cx from 'classnames';
import Project from '../../components/project';
import style from './style.scss';

const Projects = ({ projects }) => (
	<div class={cx(style.projects, 'center')}>
		{ projects.map(project => (
			<Project className={cx(style.projects__item)} project={project} />
		) )}
	</div>
);

export default Projects;
