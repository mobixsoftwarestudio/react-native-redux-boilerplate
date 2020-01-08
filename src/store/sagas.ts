import { all } from 'redux-saga/effects';
import auth from '@modules/Auth/saga';

export default function* rootSaga() {
	yield all([auth()]);
}
