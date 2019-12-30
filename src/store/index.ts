import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-native';
import reducers from './reducers';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = __DEV__ ? Reactotron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = __DEV__
	? compose(applyMiddleware(...middlewares), Reactotron.createEnhancer())
	: compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
