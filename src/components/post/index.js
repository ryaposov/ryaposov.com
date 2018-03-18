import { Link } from 'preact-router';
import Markdown from 'preact-markdown';
import TimeAgo from 'react-timeago';
import style from './style.scss';

const Post = ({ post }) => (
	<div class={style.post} key={post._id}>
		<h3 class={style.post__title}>
			<Link href={`/blog/${post._id}/`}>{post.title}</Link>
			<span class={style.post__time}>
				<TimeAgo date={post.date} />
			</span>
		</h3>
		<div class={style.post__introtext}>
			<Markdown markdown={post.introtext.substring(0, 200) + '...'} />
		</div>
		<Link href={`/blog/${post._id}/`} class={`${style.post__further} link`}>Read more</Link>
	</div>
);

export default Post;
