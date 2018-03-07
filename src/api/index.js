import fetch from 'cross-fetch';

export const config = {
	options: { mode: 'cors' },
	base: process.env.NODE_ENV === 'production'
		? '//api.ryaposov.com/crud' : '//localhost:8082/crud'
};

// Basic wrapper around fetch()
export default (url, options = {}) => (
	// Default options are marked with *
	fetch(
		config.base + url,
		Object.assign(config.options, options)
	).then(response => response.json())
);
