import { h, Component } from 'preact';
import cx from 'classnames';
import { Link } from 'preact-router';
import style from './style.scss';

const block = 'post';

export default class Post extends Component {
	render ({ post, className }) {
		return (
			<Link class={cx(style[block], ...className)} href="/">
				<span class={style.post__title}>{post.title}</span>
			</Link>
		);
	}
}
