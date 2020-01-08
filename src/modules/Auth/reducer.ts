// @ts-nocheck
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { processing, doLogin, loginResult } from './actions';
import { AuthReduxState } from './interfaces';

const initialState: AuthReduxState = {
	processing: false,
	isLoggedIn: false,
	data: {},
	error: {},
};

const appReducer = handleActions(
	{
		[`${processing}`](state, action) {
			return update(state, { processing: { $set: action.payload } });
		},
		[`${doLogin}`](state) {
			return update(state, {
				data: { $set: {} },
				error: { $set: {} },
				processing: { $set: true },
			});
		},
		[`${loginResult}`](state, action) {
			return update(state, { $set: { ...initialState, ...action.payload } });
		},
	},
	initialState,
);

export default appReducer;
