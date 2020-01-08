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
import {
	LoginRedux,
	AuthState,
	LoginScreenProps,
} from '@modules/Auth/interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { doLogin } from '@modules/Auth/actions';

const LoginScreen = ({ navigation }: LoginScreenProps) => {
	const dispatch = useDispatch();

	const authState: LoginRedux = useSelector(({ auth }: AuthState) => ({
		processing: auth.processing,
		error: auth.error,
		isLoggedIn: auth.isLoggedIn,
	}));

	const login = () => {
		dispatch(doLogin({ email: '', password: '' }));
		navigation.navigate('Main');
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
							<Button onPress={login} title="Login" />
							{authState.isLoggedIn && <Text>Logado!</Text>}
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
