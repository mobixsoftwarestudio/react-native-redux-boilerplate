import { createAction } from 'redux-actions';
import { PROCESSING, LOGIN, LOGIN_RESULT } from './types';

export const processing = createAction(PROCESSING);
export const doLogin = createAction(LOGIN);
export const loginResult = createAction(LOGIN_RESULT);
