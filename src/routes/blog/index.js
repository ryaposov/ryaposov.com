import { Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style.scss';
// import {
// 	fetchProjectsIfNeeded
// } from '../../store/actions/projects';

class Blog extends Component { // eslint-disable-line react-prefer-stateless-function
	async componentDidMount () {
		// const { dispatch } = this.props;
		// await dispatch(fetchProjectsIfNeeded());
	}

	render ({ projects }) {
		return (
			<div class={`${style.blog} center`}>

			</div>
		);
	}
}

const mapStateToProps = (state) => ({ projects: state.projects });

export default connect(mapStateToProps)(Blog);
