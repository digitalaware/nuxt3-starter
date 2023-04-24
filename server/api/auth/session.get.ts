export default eventHandler((event) => {
	if (typeof event.context.user === 'undefined') {
		return createError({ statusCode: 403, message: 'Not authorized' });
	}

	return event.context.user;
});
