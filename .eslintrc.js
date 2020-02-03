const prettierOptions = require('./.prettierrc.js');

module.exports = {
	root: true,
	env: {
		es6: true,
		jest: true,
	},
	extends: ['@react-native-community', 'prettier', 'prettier/react'],
	plugins: ['prettier', 'import', 'jsx-a11y'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': [ 'error', prettierOptions ],
		'react/jsx-closing-bracket-location': 'off',
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.tsx'],
			},
		],
		'import/prefer-default-export': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
	},
};
