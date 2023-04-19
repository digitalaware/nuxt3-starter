import { UserModel } from '~/server/databaseModels';

export default eventHandler(async (event) => {
	const query = getQuery(event);
	const [users, count] = await Promise.all([
		UserModel.find()
			.skip(query.skip ? +query.skip : 0)
			.limit(1),
		UserModel.count(),
	]);
	return {
		users,
		count,
	};
});
