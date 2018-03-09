import { Component } from 'preact';
import style from './style.scss';

class Post extends Component { // eslint-disable-line react-prefer-stateless-function
	goBack = () => this.props.history.goBack()

	render () {
		return (
			<div class={style.post}>
				<div class={style.post__banner}>
					<div class="center">
						<a onClick={this.goBack} class={style.post__back}>
							<i class="arrow arrow_left" /> Go Back
						</a>
						<h1 class={style.post__title}>Design, Development</h1>
						<p class={style.post__intro}>Create modern ecommerce web-site for UGG Australia official retailer.</p>
						<div class={style.post__tags}>
							<span class={style.post__tag}>CSS</span>
							<span class={style.post__tag}>HTML</span>
							<span class={style.post__tag}>JS</span>
						</div>
					</div>
				</div>
				<div class="center">
					<div class={style.post__content}>
						<h3>CSS in a nutshell</h3>
						<p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.</p>
						<p>Each component inside MacBook has been meticulously designed to get the most out of an incredibly thin and light enclosure.</p>
						<p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.</p>
						<p>Each component inside MacBook has been meticulously designed to get the most out of an incredibly thin and light enclosure.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Post;
