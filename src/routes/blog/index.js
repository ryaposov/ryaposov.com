import { Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.scss';
import Post from '../../components/post';
import { fetchPosts } from '../../store/actions/posts';
import TextLoader from '../../components/textLoader';

let postLoading = {
	title: <TextLoader text={'___ _____'.repeat(10)} />,
	introtext: <TextLoader text={'___ _____'.repeat(50)} />,
	date: new Date(),
	_id: false
};

let postsLoading = [postLoading].concat([postLoading]);

class Blog extends Component { // eslint-disable-line react-prefer-stateless-function
	posts = () => (this.props.posts.items.length ? this.props.posts.items : postsLoading)

	componentDidMount () {
		fetchPosts();
	}

	render ({ posts }) {
		return (
			<div class={`${style.blog} center`}>
				<div class={style.blog__posts}>
					{ !posts.isFetching && !posts.items.length ? (
						<h1>No Posts Found</h1>
					) : (
						this.posts().map((post, i) => (
							<Post post={post} key={post._id + i} />
						))
					) }
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps)(Blog);
