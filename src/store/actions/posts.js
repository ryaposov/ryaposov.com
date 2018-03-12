import * as posts from '../../api/crud';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function receivePosts(response) {
	return {
		type: RECEIVE_POSTS,
		receivedAt: Date.now(),
		posts: response
	};
}

export function fetchPosts(category = false) {
	return dispatch => {
		return posts.getAll('posts')
			.then(response => dispatch(receivePosts(response.bodyJson)));
	};
}

function shouldFetchPosts(state, category) {
	return true;
	// return !state.posts.items.length;
}

export function fetchPostsIfNeeded(category = false) {
	return (dispatch, getState) => {
		let should = shouldFetchPosts(getState(), category);
		if (should) {
			return dispatch(fetchPosts(category));
		}
	};
}

export function deletePost (id) {
	return posts.deleteOne('posts', id)
		.then(response => response);
}

export function createPost (payload) {
	return posts.create('posts', payload)
		.then(response => response);
}
