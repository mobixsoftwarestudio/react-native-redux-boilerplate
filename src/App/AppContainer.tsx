import React from 'react';
/***
 * TODO: This component will hold all global components, e.g. toast container, global loading indicator.
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigation from './routes';
import AuthNavigation from '@modules/Auth/routes';
import { useSelector } from 'react-redux';
import { AuthRedux, AuthState } from '@modules/Auth/interfaces';

const Stack = createStackNavigator();

const AppContainer = () => {
	const authState: AuthRedux = useSelector(({ auth }: AuthState) => ({
		isLoggedIn: auth.isLoggedIn,
	}));

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{authState.isLoggedIn ? (
					<>{MainNavigation()}</>
				) : (
					<>{AuthNavigation()}</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppContainer;
