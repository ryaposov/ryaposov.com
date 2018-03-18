import { Component } from 'preact';
import cx from 'classnames';
import Project from '../../components/project';
import style from './style.scss';

class Projects extends Component { // eslint-disable-line react-prefer-stateless-function
	sizes = ['2-5', '2-5', '1-5', '3-5', '2-5', '5-5', '1-5', '2-5', '2-5', '2-5', '3-5', '5-5'];

	// projects = () => (
	// 	this.props.projects.isFetching && !this.props.projects.items.length
	// 		? this.sizes : this.props.projects.items
	// )

	render ({ projects }) {
		return (
			<div class={cx(style.projects, 'center')}>
				{
					!projects.isFetching && !projects.items.length ? (
						<h1>No Projects Found</h1>
					) : (
						projects.items.map((project, i) => (
							<Project size={this.sizes[i % this.sizes.length]} className={cx(style.projects__item)} project={project} />
						))
					)
				}
			</div>
		);

		// {
		// 	projects.items.length ? (
		//
		// 	) : (
		// 		<h1>No Projects Found</h1>
		// 	)
		// }
	}
}

export default Projects;
