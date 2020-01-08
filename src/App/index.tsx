/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import '../config/ReactotronConfig';
import AppContainer from './routes';
import { Provider } from 'react-redux';
import store from '@store';

enableScreens();

const App = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</>
	);
};

export default App;
