import { Component } from 'preact';
import { connect } from 'preact-redux';
import Markdown from 'preact-markdown';
import style from './style.scss';
import * as projects from '../../api/crud';

class Project extends Component { // eslint-disable-line react-prefer-stateless-function
	state = {
		project: {}
	}

	goBack = () => window.history.back();

	init = async () => {
		let response = await projects.getOne('projects', this.props.id);
		if (response.bodyJson && '_id' in response.bodyJson) {
			this.setState({ project: response.bodyJson });
		}
	}

	async componentDidMount () {
		this.init();
	}

	render (props, { project, match }) {
		return (
			<div class={`${style.project} center`}>
				{project.hasOwnProperty('_id') &&
					<div class={`${style.project} center`}>
						<div class={style.project__banner} style={{ backgroundColor: project.colors.main }}>
							<img src="https://images.unsplash.com/photo-1465588042420-47a53c2d0320?ixlib=rb-0.3.5&s=4f37726abb95672b44fde576c79aed26&auto=format&fit=crop&w=1395&q=80" />
						</div>
						<div class={style.project__content}>
							<div class={style.project__intro}>
								<a onClick={this.goBack} class={style.project__back}>
									<i class="arrow arrow_left" /> Go Back
								</a>
								<h1 class={style.project__title}>{project.title}</h1>
								<div class={style.project__introtext}>
									<Markdown markdown={project.text} />
								</div>
							</div>
							<div class={style.project__info}>
								<div class={style.project__goal}>
									<span class={style.project__label}>Project goal</span>
									<p>{project.goal}</p>
								</div>
								<div class={style.project__param}>
									<span class={style.project__label}>Links</span>
									{ project.links.map(link => (
										<a target="_blank" native href={link} class={`${style.project__value} link`}>{link}</a>
									))}
								</div>
								<div class={style.project__param}>
									<span class={style.project__label}>Type</span>
									<span class={style.project__value}>
										<strong>{project.category.reduce((a, b) => a + ', ' + b)}</strong>
									</span>
								</div>
								<div class={style.project__param}>
									<span class={style.project__label}>Year</span>
									<span class={style.project__value}>{project.year || new Date().getFullYear()}</span>
								</div>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ projects: state.projects });

export default connect(mapStateToProps)(Project);
