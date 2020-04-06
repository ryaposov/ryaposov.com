/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/

import CopyWebpackPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';
import preactCliSwPrecachePlugin from 'preact-cli-sw-precache';

export default (config, env, helpers) => {
	// Copy all contents of assets folder
	config.plugins.push(
		new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: '**/*' }]),
		new webpack.DefinePlugin({
			'process.env.API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT)
		})
	);

	// Configure babel
	let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
	rule.options.plugins.push('transform-regenerator');
	rule.options.plugins.push(['transform-runtime', {
		helpers: false,
		polyfill: false,
		regenerator: true
	}]);

	// All recipes here: https://github.com/developit/preact-cli/wiki/Config-Recipes
	// Disable sourcemaps
	let uglify = helpers.getPluginsByName(config, 'UglifyJsPlugin')[0];
	if (uglify && uglify.plugin) {
		uglify.plugin.options.sourceMap = false;
	}

	// All recipes here: https://github.com/developit/preact-cli/wiki/Config-Recipes
	// Disable sourcemaps
	// Copy all contents of assets folder
	config.plugins.push(
		new helpers.webpack.optimize.LimitChunkCountPlugin({
		  maxChunks: 1
		})
	);

	const precacheConfig = {
		staticFileGlobs: [
			'build/*.css',
			'build/*.html',
			'build/**.woff',
			'build/*.js',
			'build/**/img/**.*'
		],
		stripPrefix: 'build/',
		runtimeCaching: [{
			urlPattern: /^https:\/\/api.ryaposov.com\//,
			handler: 'networkFirst'
		}]
	};

	return preactCliSwPrecachePlugin(config, precacheConfig);
};
