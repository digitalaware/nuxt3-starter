export default eventHandler((event) => {
	if (typeof event.context.user === 'undefined') {
		createError({ statusCode: 403, message: 'Not authorized' });
	}
	const { password, ...userData } = event.context.user;
	return userData;
});
