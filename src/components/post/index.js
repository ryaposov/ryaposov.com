import { Link } from 'preact-router';
import Markdown from 'preact-markdown';
import TimeAgo from 'react-timeago';
import style from './style.scss';

const Post = ({ post }) => (
	<div class={style.post}>
		<h3 class={style.post__title}>
			<Link href={`/blog/${post._id}/`}>{post.title}</Link>
			<span class={style.post__time}>
				<TimeAgo date={post.date} />
			</span>
		</h3>
		<div class={style.post__introtext}>
			{ post._id ? (
				<Markdown markdown={post.introtext.substring(0, 200) + '...'} />
			) : (
				post.introtext
			) }
		</div>
		{ post._id && (<Link href={`/blog/${post._id}/`} class={`${style.post__further} link`}>Read more</Link>) }
	</div>
);

export default Post;
