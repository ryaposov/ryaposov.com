import { h, Component } from 'preact';
import cx from 'classnames';
import { Link } from 'preact-router';
import { config } from '../../api';
import style from './style.scss';

const block = 'project';

export default class Project extends Component {
	styles = () => ({
		background: this.props.project.colors.main
	});

	image = () => {
		let image = this.size() === '5-5' || this.size() === '3-5' ? 'image' : 'thumbnail';
		return config().base + '/storage/' + this.props.project._id + '/' + this.props.project[image];
	}

	size = () => (
		'size' in this.props.project && this.props.project.size
			? this.props.project.size : this.props.size
	)

	render ({ project, className, size }) {
		return (
			(typeof project === 'string') ? (
				<Link class={cx(style[block], style[`${block}_${project}`], ...className)} />
			) : (
				<Link class={cx(style[block], style[`${block}_${this.size()}`], ...className)} href={`/project/${project._id}/`}>
					<span class={style.project__category}>{project.category.length && project.category.reduce((a, b) => a + ', ' + b)}</span>
					<span class={style.project__title}>{project.title}</span>
					{ this.props.project.thumbnail &&
						<div class={style.project__image} style={this.styles()}>
							<img src={this.image()} />
						</div>
					}
				</Link>
			)
		);
	}
}
