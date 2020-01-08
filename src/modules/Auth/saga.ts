import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN, SIGNUP } from './types';
import { loginResult, signUpResult } from './actions';
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

export function* signUp({ payload: signUpData }: AuthSaga) {
	try {
		// const response = yield call(request, {
		// 	url: '/login',
		// 	method: 'POST',
		// 	data: authData,
		// });
		yield put(
			signUpResult({
				data: signUpData,
				error: {},
				processing: false,
			}),
		);
	} catch (err) {
		if (err instanceof Error) {
			yield put(
				signUpResult({
					error: err.stack!,
					data: {},
					processing: false,
				}),
			);
		} else {
			yield put(
				signUpResult({
					error: 'Unexpected error',
					data: {},
					processing: false,
				}),
			);
		}
	}
}

export default function* authSagas() {
	yield takeLatest(LOGIN, authenticate);
	yield takeLatest(SIGNUP, signUp);
}
