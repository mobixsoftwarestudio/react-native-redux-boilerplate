module.exports = function(api) {
	api.cache(true);

	const plugins = [
		[
			'module-resolver',
			{
				root: ['./'],
				extensions: [
					'.ios.js',
					'.android.js',
					'.js',
					'.json',
					'.jsx',
					'.ts',
					'.tsx',
				],
				alias: {
					'@app': './src/App',
					'@assets': './src/assets',
					'@styles': './src/styles',
					'@core': './src/core',
					'@utils': './src/utils',
					'@modules': './src/modules',
					'@store': './src/store',
				},
			},
		],
	];
	const presets = [
		'module:metro-react-native-babel-preset',
		'module:react-native-dotenv'
	];

	return {
		plugins,
		presets,
		sourceMaps: true,
	};
};
