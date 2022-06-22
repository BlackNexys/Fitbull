
const routes = [
	{
		'title': 'Home',
		'to': '/',
	}
].filter((item) => {
	// TODO: true should be replaced by if user is developer
	return !item.inactive && (!item.dev || true);
});

export default routes;
