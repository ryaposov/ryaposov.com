import { h, Component } from 'preact';
import cx from 'classnames';
import { Link } from 'preact-router';
import { config } from '../../api';
import style from './style.scss';
import TextLoader from '../textLoader';

const block = 'project';

let projectLoading = {
	title: <TextLoader text={'___ _____'.repeat(2)} />,
	category: [<TextLoader text="_____" />],
	colors: { main: '#eaeaea' },
	_id: false,
	thumbnail: false
};

export default class Project extends Component {
	loading = () => (typeof this.props.project === 'string')

	project = () => (this.loading() ? projectLoading : this.props.project)

	image = () => {
		let image = this.size() === '5-5' || this.size() === '3-5' ? 'image' : 'thumbnail';
		return config().base + '/storage/' + this.project()._id + '/' + this.project()[image];
	}

	size = () => {
		if (this.loading() || 'size' in this.project()) {
			return this.props.size;
		}
		return this.project().size;
	}

	render ({ className, size }) {
		let project = this.project();

		return (
			<Link class={cx(style[block], style[`${block}_${this.size()}`], ...className)} href={`/project/${project._id}/`}>
				<div class={style.project__top}>
					<span class={style.project__category}>{project.category.length && project.category.reduce((a, b) => a + ', ' + b)}</span>
					<span class={style.project__year}>{new Date(project.date).getFullYear()}</span>
				</div>
				<span class={style.project__title}>{project.title}</span>
				<div class={style.project__image} style={{ background: project.colors.main }}>
					{ project.thumbnail && <img src={this.image()} /> }
				</div>
			</Link>
		);
	}
}
