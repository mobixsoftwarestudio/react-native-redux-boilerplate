import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';

const RouteConfigs = {
	Login: {
		screen: LoginScreen,
	},
	Signup: {
		screen: SignUpScreen,
	},
};

const StackNavigatorConfig = {
	initialRouteName: 'Login',
};

export default createStackNavigator(RouteConfigs, StackNavigatorConfig);
