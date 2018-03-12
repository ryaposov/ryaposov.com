import { Component } from 'preact';
import style from './style.scss';

class Design extends Component { // eslint-disable-line react-prefer-stateless-function
	async componentDidMount () {
	}

	render ({ projects }) {
		return (
			<div class={`${style.home} center`}>
				<h1>Not Found</h1>
			</div>
		);
	}
}

export default Design;
