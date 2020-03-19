import fetch from 'unfetch';

export const config = () => ({
	options: {
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		}
	},
	base: process.env.API_ENDPOINT
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
