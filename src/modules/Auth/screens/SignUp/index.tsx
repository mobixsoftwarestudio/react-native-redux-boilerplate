import React, { useEffect } from 'react';
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
import { doSignUp } from '@modules/Auth/actions';
import _isEmpty from 'lodash/isEmpty';
import { useNavigation } from 'react-navigation-hooks';

const SignUpScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const authState: AuthRedux = useSelector(({ auth }: AuthState) => ({
		processing: auth.processing,
		error: auth.error,
		data: auth.data,
	}));

	const signUp = () => {
		dispatch(doSignUp({ email: '', name: '', password: '' }));
	};

	useEffect(() => {
		if (!_isEmpty(authState.data)) {
			navigation.navigate('Main');
		}
	}, [authState.data, navigation]);

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>
					<View style={styles.body}>
						<View style={styles.sectionContainer}>
							<Text> Sign Up Screen!</Text>
							<Button onPress={signUp} title="Confirm" />
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

export default SignUpScreen;
