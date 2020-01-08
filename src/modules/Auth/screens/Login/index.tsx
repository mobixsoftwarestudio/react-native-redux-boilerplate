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
import { useNavigation } from 'react-navigation-hooks';

const LoginScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const authState: AuthRedux = useSelector(({ auth }: AuthState) => ({
		processing: auth.processing,
		error: auth.error,
		isLoggedIn: auth.isLoggedIn,
	}));

	const handleLogin = () => {
		dispatch(doLogin({ email: '', password: '' }));
		navigation.navigate('Main');
	};

	const handleSignUp = () => {
		navigation.navigate('Signup');
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
							<Button onPress={handleLogin} title="Login" />
							<Button onPress={handleSignUp} title="SignUp" />
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
