import { Action } from 'redux';

export type ApiResponse = Record<string, any>;

export interface AuthRedux {
	readonly data?: LoginResponse | SignUpResponse | ForgotPasswordParams;
	readonly processing?: boolean;
	readonly isLoggedIn?: boolean;
	readonly error?: {};
}

export interface AuthState {
	auth: AuthRedux;
}

export interface LoginResponse extends ApiResponse {
	token?: string;
}

export interface LoginScreenProps {}

export interface AuthSaga extends Action {
	payload: {
		authData: LoginParams;
		signUpData: SignUpParams;
		forgotPasswordData: ForgotPasswordParams;
	};
}

export interface LoginParams {
	email: string;
	password: string;
}

export interface SignUpParams {
	email: string;
	name: string;
	password: string;
}
export interface SignUpResponse extends ApiResponse {
	message?: string;
}

export interface SignUpScreenProps {}

export interface ForgotPasswordParams {
	email: string;
}
export interface ForgotPasswordResponse extends ApiResponse {
	message?: string;
}

export interface ForgotPasswordScreenProps {}
