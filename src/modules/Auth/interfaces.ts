import { Action } from 'redux';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from 'react-navigation';

export type ApiResponse = Record<string, any>;

export interface LoginRedux {
	readonly data?: AuthRaw;
	readonly processing?: boolean;
	readonly isLoggedIn?: boolean;
	readonly error?: {};
}

export interface AuthReduxState extends LoginRedux {}

export interface AuthState {
	auth: AuthReduxState;
}

export interface AuthRaw extends ApiResponse {
	token: string;
}

export interface LoginScreenProps {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface AuthSaga extends Action {
	payload: {
		authData: LoginRaw;
	};
}

export interface LoginRaw {
	email: string;
	password: string;
}
