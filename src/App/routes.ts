import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthStack from '@modules/Auth/routes';
import MainScreen from '@modules/Main/screens/MainScreen';

const appRouter = createSwitchNavigator(
	{
		Authentication: {
			screen: AuthStack,
		},
		Main: {
			screen: MainScreen,
		},
	},
	{
		initialRouteName: 'Authentication',
		backBehavior: 'none',
	},
);

const appContainer = createAppContainer(appRouter);

export default appContainer;
