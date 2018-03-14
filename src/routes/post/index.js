import { Component } from 'preact';
import Markdown from 'preact-markdown';
import style from './style.scss';
import * as post from '../../api/crud';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

class Post extends Component { // eslint-disable-line react-prefer-stateless-function
	state = {
		post: {}
	}

	init = async () => {
		let response = await post.getOne('posts', this.props.id);
		if (response.bodyJson && '_id' in response.bodyJson) {
			this.setState({ post: response.bodyJson });
		}
	}

	goBack = () => window.history.back();

	componentDidMount () {
		this.init();
		Prism.highlightAll();
	}

	componentDidUpdate () {
		Prism.highlightAll();
	}

	render (props, { post }) {
		return (
			<div class={style.post}>
				{ '_id' in post &&
					<div class={style.post__wrap}>
						<div class={style.post__banner}>
							<div class="center">
								<a onClick={this.goBack} class={style.post__back}>
									<i class="arrow arrow_left" /> Go Back
								</a>
								<h1 class={style.post__title}>{post.title}</h1>
								<p class={style.post__intro}>{post.subtitle}</p>
								<div class={style.post__tags}>
									{ post.tags.map(tag => (
										<span class={style.post__tag}>{tag}</span>
									))}
								</div>
							</div>
						</div>
						<div class="center">
							<div class={style.post__content}>
								<Markdown markdown={post.text} />
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default Post;
