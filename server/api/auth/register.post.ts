import { UserModel } from '~/server/databaseModels';
import { LoginRequest } from '~/components/auth/auth.types';

export default eventHandler(async (event) => {
	const { username, password } = await readBody<LoginRequest>(event);
	const existedUser = await UserModel.findOne({ username });
	if (existedUser) {
		return createError({ statusCode: 403, message: 'User already exist' });
	}
	return UserModel.create({ username, password });
});
