import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '@modules/Main/screens/MainScreen';

type RootStackParamList = {
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(): React.ReactElement {
  return (
    <>
      <Stack.Screen name="Main" component={MainScreen} />
    </>
  );
}
export default RootNavigator;
