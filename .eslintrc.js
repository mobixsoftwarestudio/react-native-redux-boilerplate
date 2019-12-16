// const prettierOptions = require('./prettierrc');
// console.log(prettierOptions);

// const prettierOptions = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
// );

module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error', {
        bracketSpacing: true,
        jsxBracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
      },
    ],
  },
};
