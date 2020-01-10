import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '@modules/Auth/actions';
import { useNavigation } from 'react-navigation-hooks';
import { AuthRedux, AuthState } from '@modules/Auth/interfaces';

export interface AppProps {}

const App: React.FC = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const authState: AuthRedux = useSelector(({ auth }: AuthState) => ({
		isLoggedIn: auth.isLoggedIn,
	}));

	const handleLogout = () => {
		dispatch(doLogout());
	};

	useEffect(() => {
		if (!authState.isLoggedIn) {
			navigation.navigate('Login');
		}
	}, [authState.isLoggedIn, navigation]);

	return (
		<View style={styles.body}>
			<Text style={styles.title}>{`Main Screen!\nYou're Logged!`}</Text>
			<Button onPress={handleLogout} title="Logout" />
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
	},
});

export default App;
