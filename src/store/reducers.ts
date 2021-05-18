import { combineReducers } from 'redux';
import auth from '@modules/Auth/reducer';
import { LOGOUT } from '@modules/Auth/types';

const reducers = combineReducers({
  auth,
});

export default reducers;

export const rootReducer = (state: any, action: any) => {
  if (action.type === LOGOUT) {
    state = {};
  }
  return reducers(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;
