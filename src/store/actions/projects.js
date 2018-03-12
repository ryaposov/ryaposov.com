import * as projects from '../../api/crud';
import store from '../../store';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

function receiveProjects(response) {
	return {
		type: RECEIVE_PROJECTS,
		receivedAt: Date.now(),
		projects: response
	};
}

export function fetchProjects(category = false) {
	return dispatch => (
		projects.getAll('projects')
			.then(response => validateProjectsResponse(response, dispatch))
	);
}

function validateProjectsResponse (response, dispatch) {
	if (response.status === 200 && response.bodyJson.length) {
		return dispatch(receiveProjects(response.bodyJson));
	}
}

function shouldFetchProjects(state, category) {
	return true;
	// return !state.projects.items.length;
}

export function fetchProjectsIfNeeded(category = false) {
	let should = shouldFetchProjects(store.getState(), category);
	if (should) {
		return store.dispatch(fetchProjects(category));
	}
}
