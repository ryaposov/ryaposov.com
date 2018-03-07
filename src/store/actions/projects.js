import * as projects from '../../api/projects';

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

function requestProjects () {
	return {
		type: REQUEST_PROJECTS
	};
}

function receiveProjects(response) {
	return {
		type: RECEIVE_PROJECTS,
		receivedAt: Date.now(),
		projects: response
	};
}

function fetchProjects(subreddit) {
	return dispatch => {
		dispatch(requestProjects());
		return projects.getAll()
			.then(response => dispatch(
				receiveProjects(response))
			);
	};
}

function shouldFetchProjects(state, category) {
	return !state.projects.items.length;
}

export function fetchProjectsIfNeeded(category = false) {
	return (dispatch, getState) => {
		let should = shouldFetchProjects(getState(), category);
		if (should) {
			return dispatch(fetchProjects(category));
		}
	};
}
