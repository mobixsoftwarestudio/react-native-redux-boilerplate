import Reactotron, { asyncStorage } from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
	const tron = Reactotron.configure()
		.useReactNative()
		.use(asyncStorage({}))
		.use(reactotronRedux())
		.use(sagaPlugin({}))
		.connect();

	tron.clear();
}

/*
Also, we can add some itens to ignore on async storage
	asyncStorage({
		ignore: ['secret']
	})
*/
