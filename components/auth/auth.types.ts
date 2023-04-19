export interface LoginRequest {
	username: string;
	password: string;
}

export interface RegisterFormState extends LoginRequest {
	passwordConfirm: string;
}
