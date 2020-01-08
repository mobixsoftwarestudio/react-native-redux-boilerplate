import { createAction } from 'redux-actions';
import {
	PROCESSING,
	LOGIN,
	LOGIN_RESULT,
	SIGNUP,
	SIGNUP_RESULT,
} from './types';

export const processing = createAction(PROCESSING);

export const doLogin = createAction(LOGIN);
export const loginResult = createAction(LOGIN_RESULT);

export const doSignUp = createAction(SIGNUP);
export const signUpResult = createAction(SIGNUP_RESULT);
