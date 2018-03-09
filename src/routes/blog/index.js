import { Component } from 'preact';
import { Link } from 'react-router-dom';
import style from './style.scss';

class Blog extends Component { // eslint-disable-line react-prefer-stateless-function
	render () {
		return (
			<div class={`${style.blog} center`}>
				<div class={style.blog__posts}>
					{[0,1,2,3,4,5].map(post => (
						<div class={style.blog__post}>
							<h3 class={style.blog__title}>
								<Link to={`/blog/${post}/`}>CSS in a nutshell</Link>
								<span class={style.blog__time}>Wednesday, 23:50</span>
							</h3>
							<div class={style.blog__introtext}>
								Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster...
							</div>
							<Link to={`/blog/${post}/`} class={`${style.blog__further} link`}>Read more</Link>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Blog;
