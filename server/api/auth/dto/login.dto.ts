import { Type, validateBody } from 'h3-typebox';
import { H3Event } from 'h3';

const LoginSchema = Type.Object({
	username: Type.String(),
	password: Type.String(),
});

export const validateLoginDto = (event: H3Event): Promise<any> => {
	return validateBody(event, LoginSchema);
};
