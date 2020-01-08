import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import ForgotPasswordScreen from './screens/ForgotPassword';

const RouteConfigs = {
	Login: {
		screen: LoginScreen,
	},
	SignUp: {
		screen: SignUpScreen,
	},
	ForgotPassword: {
		screen: ForgotPasswordScreen,
	},
};

const StackNavigatorConfig = {
	initialRouteName: 'Login',
};

export default createStackNavigator(RouteConfigs, StackNavigatorConfig);
