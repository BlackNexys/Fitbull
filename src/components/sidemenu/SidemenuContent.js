
const routes = [
	{
		'title': 'Home',
		'to': '/',
	},
	{
		'title': 'Program',
		'to': '/program',
	},
	{
		'title': 'Schedule',
		'to': '/schedule',
	},
	{
		'title': 'Profile',
		'to': '/profile',
	}
].filter((item) => {
	// TODO: true should be replaced by if user is developer
	return !item.inactive && (!item.dev || true);
});

export default routes;
