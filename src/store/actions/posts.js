import * as posts from '../../api/crud';
import store from '../../store';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function receivePosts(response) {
	return {
		type: RECEIVE_POSTS,
		receivedAt: Date.now(),
		posts: response
	};
}

export function fetchPosts(category = false) {
	return dispatch => (
		posts.getAll('posts')
			.then(response => dispatch(receivePosts(response.bodyJson)))
	);
}

function shouldFetchPosts(state, category) {
	return true;
	// return !state.posts.items.length;
}

export function fetchPostsIfNeeded(category = false) {
	let should = shouldFetchPosts(store.getState(), category);
	if (should) {
		return store.dispatch(fetchPosts(category));
	}
}
