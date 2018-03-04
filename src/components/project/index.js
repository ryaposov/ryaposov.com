import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import style from './style.scss';

const block = 'project';

class Project extends Component {
	styles = () => ({
		background: this.props.project.color
	});

	render ({ header, project, className }) {
		return (
			<Link class={cx(style[block], style[`${block}_${project.size}`], ...className)} style={this.styles()} to="/">
				<span class={style.project__category}>{project.category.reduce((a, b) => a + ', ' + b)}</span>
				<span class={style.project__title}>{project.title}</span>
			</Link>
		);
	}
}

const mapStateToProps = (state) => ({
	header: state.header
});

export default connect(mapStateToProps)(Project);
