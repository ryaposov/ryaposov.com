import fetch from 'unfetch';

export const config = () => ({
	options: {
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		}
	},
	base: process.env.NODE_ENV === 'production'
		? '//api.ryaposov.com' : '//localhost:8082'
});


// Basic wrapper around fetch()
export default (url, options = {}) => {
	let configuration = {};
	configuration = Object.assign({}, config().options, options);

	return fetch(config().base + url, configuration)
		.then(async (response, i) => {
			let body = await response.json();
			return Object.assign(response, { bodyJson: body });
		});
};
