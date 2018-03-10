/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/

import CopyWebpackPlugin from 'copy-webpack-plugin';

export default (config, env, helpers) => {
	// Copy all contents of assets folder
	config.plugins.push(
		new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: '**/*' }])
	);

	// Configure babel
	let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
	rule.options.plugins.push('transform-regenerator');
	rule.options.plugins.push(['transform-runtime', {
		'helpers': false,
		'polyfill': false,
		'regenerator': true
	}]);

	// All recipes here: https://github.com/developit/preact-cli/wiki/Config-Recipes
	// Disable sourcemaps
	let uglify = helpers.getPluginsByName(config, 'UglifyJsPlugin')[0];
	if (uglify && uglify.plugin) {
		uglify.plugin.options.sourceMap = false;
	}
};
