import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { doLogout } from '@modules/Auth/actions';

export interface AppProps {}

const App: React.FC = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(doLogout());
	};

	return (
		<View style={styles.body}>
			<Text style={styles.title}>{`Main Screen!\nYou're Logged!`}</Text>
			<Button testID="logout-btn" onPress={handleLogout} title="Logout" />
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
