import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN } from './types';
import { loginResult } from './actions';
// import request from '@utils/requests';
import { AuthSaga } from './interfaces';

export function* authenticate({ payload: authData }: AuthSaga) {
	try {
		// const response = yield call(request, {
		// 	url: '/login',
		// 	method: 'POST',
		// 	data: authData,
		// });
		yield put(
			loginResult({
				isLoggedIn: true,
				data: authData,
			}),
		);
	} catch (err) {
		if (err instanceof Error) {
			yield put(
				loginResult({
					error: err.stack!,
				}),
			);
		} else {
			yield put(
				loginResult({
					error: 'Unexpected error',
				}),
			);
		}
	}
}

export default function* authSagas() {
	yield takeLatest(LOGIN, authenticate);
}
