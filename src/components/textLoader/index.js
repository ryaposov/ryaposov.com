import { Component } from 'preact';

class TextLoader extends Component {
	render ({ text }) {
		return (
			<span class="text-loader">{text}</span>
		)
	}
}

export default TextLoader
