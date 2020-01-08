import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/Login';

const RouteConfigs = {
	Login: {
		screen: LoginScreen,
	},
};

const StackNavigatorConfig = {
	initialRouteName: 'Login',
};

export default createStackNavigator(RouteConfigs, StackNavigatorConfig);
