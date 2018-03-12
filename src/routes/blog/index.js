import { Component } from 'preact';
import { connect } from 'preact-redux';
import { Link } from 'preact-router';
import Markdown from 'preact-markdown';
import TimeAgo from 'react-timeago';
import style from './style.scss';
import { fetchPostsIfNeeded } from '../../store/actions/posts';

class Blog extends Component { // eslint-disable-line react-prefer-stateless-function
	componentDidMount () {
		const { dispatch } = this.props;
		dispatch(fetchPostsIfNeeded());
	}

	render ({ posts }) {
		return (
			<div class={`${style.blog} center`}>
				<div class={style.blog__posts}>
					{ !posts.items.length && <h1>No Posts Found</h1>}
					{ posts.items.map(post => (
						<div class={style.blog__post}>
							<h3 class={style.blog__title}>
								<Link href={`/blog/${post._id}/`}>{post.title}</Link>
								<span class={style.blog__time}>
									<TimeAgo date={post.createdAt} />
								</span>
							</h3>
							<div class={style.blog__introtext}>
								<Markdown markdown={post.introtext.substring(0, 200) + '...'} />
							</div>
							<Link href={`/blog/${post._id}/`} class={`${style.blog__further} link`}>Read more</Link>
						</div>
					)) }
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps)(Blog);
