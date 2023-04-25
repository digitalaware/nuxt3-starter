// eslint-disable-next-line import/default
import jsonwebtoken from 'jsonwebtoken';
import { H3Error } from 'h3';
import { UserModel } from '~/server/databaseModels';
import { LoginRequest } from '~/types/auth.types';
import { validateLoginDto } from '~/server/api/auth/dto/login.dto';
// eslint-disable-next-line import/no-named-as-default-member
const { sign } = jsonwebtoken;

export default eventHandler(async (event) => {
	try {
		await validateLoginDto(event);
	} catch (e) {
		throw createError(e as H3Error);
	}

	const { username, password } = await readBody<LoginRequest>(event);
	const user = await UserModel.findOne({ username }).select('+password').exec();
	if (!user) {
		throw createError({ statusCode: 403, statusMessage: 'Unauthorized' });
	}
	const isPasswordValid = await user.verifyPasswordSync(password);
	if (!isPasswordValid) {
		throw createError({ statusCode: 403, statusMessage: 'Unauthorized' });
	}

	const expiresIn = '15m';
	const config = useRuntimeConfig();
	const accessToken = sign({ sub: user._id }, config.jwtSecret, { expiresIn });

	return {
		token: {
			accessToken,
		},
	};
});
