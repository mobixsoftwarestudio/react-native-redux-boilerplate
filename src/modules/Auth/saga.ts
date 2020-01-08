import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN, SIGNUP, FORGOT_PASSWORD } from './types';
import { loginResult, signUpResult, forgotPasswordResult } from './actions';
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
		// 	url: '/register',
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

export function* forgotPassword({ payload: forgotPasswordData }: AuthSaga) {
	try {
		// const response = yield call(request, {
		// 	url: '/forgot_password',
		// 	method: 'POST',
		// 	data: authData,
		// });
		yield put(
			forgotPasswordResult({
				data: forgotPasswordData,
				error: {},
				processing: false,
			}),
		);
	} catch (err) {
		if (err instanceof Error) {
			yield put(
				forgotPasswordResult({
					error: err.stack!,
					data: {},
					processing: false,
				}),
			);
		} else {
			yield put(
				forgotPasswordResult({
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
	yield takeLatest(FORGOT_PASSWORD, forgotPassword);
}
