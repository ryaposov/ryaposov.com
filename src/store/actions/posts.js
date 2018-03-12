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
	posts.getAll('posts').then(response => {
		if (validatePostsResponse(response)) {
			return store.dispatch(receivePosts(response.bodyJson));
		}
	});
}

function validatePostsResponse (response) {
	return response.status === 200 && response.bodyJson.length;
}
