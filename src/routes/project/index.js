import { Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.scss';
import { fetchProjectIfNeeded } from '../../store/actions/project';

class Project extends Component { // eslint-disable-line react-prefer-stateless-function
	goBack = () => this.props.history.goBack()

	async componentDidMount () {
		const { dispatch } = this.props;
		await dispatch(fetchProjectIfNeeded(this.props.match.params.id));
	}

	render ({ project, match }) {
		return (
			<div class={`${style.project} center`}>
				{project.hasOwnProperty('_id') &&
					<div class={`${style.project} center`}>
						<div class={style.project__banner}>
							<img src="https://images.unsplash.com/photo-1465588042420-47a53c2d0320?ixlib=rb-0.3.5&s=4f37726abb95672b44fde576c79aed26&auto=format&fit=crop&w=1395&q=80" />
						</div>
						<div class={style.project__content}>
							<div class={style.project__intro}>
								<a onClick={this.goBack} class={style.project__back}>
									<i class="arrow arrow_left" /> Go Back
								</a>
								<h1 class={style.project__title}>Website for UGG Australia official retailer</h1>
								<div class={style.project__introtext}>
									<p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to.</p>
									<p>Each component inside MacBook has been meticulously designed to get the most out of an incredibly thin and light enclosure.</p>
								</div>
							</div>
							<div class={style.project__info}>
								<div class={style.project__goal}>
									<span class={style.project__label}>Project goal</span>
									<p>Create modern ecommerce web-site for UGG Australia official retailer.</p>
								</div>
								<div class={style.project__param}>
									<span class={style.project__label}>Links</span>
									<a target="_blank" class={`${style.project__value} link`}>ulime.ryaposov.com</a>
								</div>
								<div class={style.project__param}>
									<span class={style.project__label}>Type</span>
									<span class={style.project__value}>
										<strong>{project.category.reduce((a, b) => a + ', ' + b)}</strong>
									</span>
								</div>
								<div class={style.project__param}>
									<span class={style.project__label}>Year</span>
									<span class={style.project__value}>2015</span>
								</div>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ project: state.project.project });

export default connect(mapStateToProps)(Project);
