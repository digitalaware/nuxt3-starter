// eslint-disable-next-line import/default
import jsonwebtoken from 'jsonwebtoken';
import { getRequestHeader } from 'h3';
import { UserModel } from '~/server/databaseModels';
import { User } from '~/models/User';
// eslint-disable-next-line import/no-named-as-default-member
const { decode, verify } = jsonwebtoken;

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const requestUrl = getRequestURL(event).href;
	if (!config.publicRoutes.some((route) => requestUrl.includes(route))) {
		try {
			const authToken = getRequestHeader(event, 'authorization')?.split('Bearer ')[1];
			if (typeof authToken === 'undefined') {
				throw createError({
					statusCode: 403,
					statusMessage: 'Need to pass valid Bearer-authorization header to access this endpoint',
				});
			}
			verify(authToken, config.jwtSecret);
			const userId = decode(authToken as string);
			const authUser = await UserModel.findById(userId?.sub).select('+password').lean().exec();
			if (!authUser) {
				createError({ statusCode: 403, message: 'User no longer exist' });
			}
			delete (authUser as User).password;
			event.context.user = authUser;
		} catch (e) {
			createError({ statusCode: 403, message: 'Not authorized' });
		}
	}
});
