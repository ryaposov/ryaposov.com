import { Component } from 'preact';
import cx from 'classnames';
import Project from '../../components/project';
import style from './style.scss';

class Projects extends Component { // eslint-disable-line react-prefer-stateless-function
	sizes = ['2-5', '2-5', '1-5', '2-5', '1-5', '2-5', '5-5'];
	render ({ projects }) {
		return (
			<div class={cx(style.projects, 'center')}>
				{
					projects.length ? (
						projects.map((project, i) => (
							<Project size={this.sizes[i % this.sizes.length]} className={cx(style.projects__item)} project={project} />
						))
					) : (
						<h1>No Projects Found</h1>
					)
				}
			</div>
		);
	}
}

export default Projects;
