const useGetCookie = ({ name }) => {
	const decodedCookies = decodeURIComponent(document.cookie).split(';');
	if (decodedCookies.includes(name + '=')) {
		for (let i = 0; i < decodedCookies.length; i++) {
			console.log(decodedCookies[i]);
		}
	}
	return false;
};

export default useGetCookie;
