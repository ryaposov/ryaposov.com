import { Component } from 'preact';
import { connect } from 'preact-redux';
import Markdown from 'preact-markdown';
import { config } from '../../api';
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

	image = () => (
		config().base + '/storage/' + this.props.id + '/' + this.state.project.image
	)

	async componentDidMount () {
		this.init();
	}

	render (props, { project, match }) {
		return (
			<div class={`${style.project} center`}>
				{project.hasOwnProperty('_id') &&
					<div class={`${style.project} center`}>
						<div class={style.project__banner} style={{ backgroundColor: project.colors.main }}>
							<img src={this.image()} />
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
									<span class={style.project__label}>Client</span>
									<span class={style.project__value}>{project.client}</span>
								</div>
								<div class={style.project__param}>
									<span class={style.project__label}>Links</span>
									<div class={style.project__links}>
										{ project.links.map(link => (
											<div><a target="_blank" native href={link} class={`${style.project__value} link`}>{link}</a></div>
										))}
									</div>
								</div>
								<div class={style.project__param}>
									<span class={style.project__label}>Type</span>
									<span class={style.project__value}>
										<strong>{project.category.reduce((a, b) => a + ', ' + b)}</strong>
									</span>
								</div>
								<div class={style.project__param}>
									<span class={style.project__label}>Year</span>
									<span class={style.project__value}>{new Date(project.date || false).getFullYear()}</span>
								</div>
								{ project.stack.length > 0 &&
									<div class={style.project__param}>
										<span class={style.project__label}>Stack</span>
										<span class={style.project__value}>
											<strong>{project.stack.reduce((a, b) => a + ', ' + b)}</strong>
										</span>
									</div>
								}
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
