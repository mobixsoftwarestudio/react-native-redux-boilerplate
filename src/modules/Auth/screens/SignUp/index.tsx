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
import { useDispatch } from 'react-redux';
import { doSignUp } from '@modules/Auth/actions';

const SignUpScreen = () => {
  const dispatch = useDispatch();

  const signUp = () => {
    dispatch(doSignUp({ email: '', name: '', password: '' }));
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
