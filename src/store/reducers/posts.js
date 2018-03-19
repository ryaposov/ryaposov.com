import {
	RECEIVE_POSTS,
	REQUEST_POSTS
} from './../actions/posts';

let defaultState = {
	isFetching: false,
	didInvalidate: false,
	items: []
};

function posts(state = defaultState, action) {
	switch (action.type) {
		case REQUEST_POSTS:
			return Object.assign({}, state, {
				isFetching: true,
				items: action.posts
			});
		case RECEIVE_POSTS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.posts,
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
}

export default posts;
