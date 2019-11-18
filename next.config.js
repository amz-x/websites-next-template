// next.config.js

// Libs
const path = require('path');
const dotenvLoad = require('dotenv-load');

// Plugins
const withPlugins = require('next-compose-plugins');
const NextEnvPlugin = require('next-env');
const FontPlugin = require('next-fonts');
const SassPlugin = require('@zeit/next-sass');

// Load .env file
dotenvLoad();

// Configuration
const nextConfig = {
	distDir: 'build',
	webpack: (config, options) => {
		config.resolve.modules.unshift(__dirname)
		return config;
	}
};


// Setup
module.exports = withPlugins([
	NextEnvPlugin(),
	FontPlugin({}),	
	SassPlugin({
		sassLoaderOptions: {
			sourceMap: true,
			includePaths: [
				path.resolve(__dirname, 'node_modules')
			]
		}
	}),		
], nextConfig);