export default function reducer(state, action) {
	switch (action.type) {
		case 'UPDATE_USER':
			return { ...state, user: action.payload };
		case 'UPDATE_ACCESS_TOKEN':
			return { ...state, accessToken: action.payload };
		default:
			return state;
	}
}
