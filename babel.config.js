module.exports = function(api) {
  api.cache(true);

  const plugins = [
    [
      'module-resolver',
      {
        root: ['./src'],
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
  const presets = ['module:metro-react-native-babel-preset'];

  return {
    plugins,
    presets,
    sourceMaps: true,
  };
};
