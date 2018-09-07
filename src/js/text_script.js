export default function testing (json) {
	return {
		item: true,
		logJSONToConsole: function () {
			console.log('from inside separate script', json);
		}
	}
}