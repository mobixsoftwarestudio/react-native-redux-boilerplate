module.exports = function(api) {
	api.cache(true);

	const presets = ['@babel/preset-env', '@babel/preset-typescript'];
	const plugins = ['@babel/plugin-proposal-class-properties'];

	return {
		presets,
		plugins,
	};
};
