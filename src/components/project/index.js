import { h, Component } from 'preact';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import style from './style.scss';

const block = 'project';

export default class Project extends Component {
	styles = () => ({
		background: this.props.project.color
	});

	render ({ project, className }) {
		return (
			<Link class={cx(style[block], style[`${block}_${project.size}`], ...className)} style={this.styles()} to={`/project/${project._id}/`}>
				<span class={style.project__category}>{project.category.reduce((a, b) => a + ', ' + b)}</span>
				<span class={style.project__title}>{project.title}</span>
			</Link>
		);
	}
}
