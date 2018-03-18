import { Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.scss';
import Post from '../../components/post';
import { fetchPosts } from '../../store/actions/posts';

class Blog extends Component { // eslint-disable-line react-prefer-stateless-function
	componentDidMount () {
		fetchPosts();
	}

	render ({ posts }) {
		return (
			<div class={`${style.blog} center`}>
				<div class={style.blog__posts}>
					{
						!posts.isFetching && !posts.items.length ? (
							<h1>No Posts Found</h1>
						) : (
							posts.items.map((post, i) => (
								<Post post={post} key={post._id} />
							))
						)
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps)(Blog);
