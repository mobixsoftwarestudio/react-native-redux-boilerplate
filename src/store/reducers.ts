import { combineReducers } from 'redux';
import auth from '@modules/Auth/reducer';

const reducers = combineReducers({
	auth,
});

export default reducers;

export const rootReducer = (state: any, action: any) => {
	// TODO: Logout to clear redux states
	return reducers(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;
