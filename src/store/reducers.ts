import { combineReducers } from 'redux';

const reducers = combineReducers({
	// Remove this line after you create yours reducers
	example: () => [],
});

export default reducers;

export const rootReducer = (state: any, action: any) => {
	// TODO: Logout to clear redux states
	return reducers(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;
