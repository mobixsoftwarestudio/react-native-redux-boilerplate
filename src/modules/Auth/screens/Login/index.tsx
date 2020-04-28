import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	StatusBar,
	Button,
	Text,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AuthRedux, AuthState } from '@modules/Auth/interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { doLogin } from '@modules/Auth/actions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes';

type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type LoginScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'Login'
>;

type Props = {
	route: LoginScreenRouteProp;
	navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
	const dispatch = useDispatch();

	const authState: AuthRedux = useSelector(({ auth }: AuthState) => ({
		processing: auth.processing,
		error: auth.error,
		isLoggedIn: auth.isLoggedIn,
	}));

	const handleLogin = () => {
		dispatch(doLogin({ email: '', password: '' }));
	};

	const handleSignUp = () => {
		navigation.navigate('SignUp');
	};

	const handleForgotPassword = () => {
		navigation.navigate('ForgotPassword');
	};

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>
					<View style={styles.body}>
						<View style={styles.sectionContainer}>
							<Text testID="welcome">Welcome!</Text>
							<Button testID="login-btn" onPress={handleLogin} title="Login" />
							<Button onPress={handleSignUp} title="SignUp" />
							<Button onPress={handleForgotPassword} title="Forgot Password" />
							{authState.isLoggedIn && <Text>Logged!</Text>}
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
		flexGrow: 1,
	},
	body: {
		backgroundColor: Colors.white,
		alignItems: 'center',
	},
	sectionContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
});

export default LoginScreen;
