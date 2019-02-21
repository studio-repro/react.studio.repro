export default class ApiUtils {
	public static getApiEndpoint() {
		return process.env.REACT_APP_API_ENDPOINT || '';
	}

	public static getApiAccessToken() {
		return process.env.REACT_APP_API_ACCESS_TOKEN || '';
	}
}
