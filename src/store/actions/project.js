import * as projects from '../../api/crud';

export const REQUEST_PROJECT = 'REQUEST_PROJECT';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

function requestProject () {
	return {
		type: REQUEST_PROJECT
	};
}

function receiveProject (response) {
	return {
		type: RECEIVE_PROJECT,
		receivedAt: Date.now(),
		project: response
	};
}

function fetchProject (id) {
	return dispatch => {
		dispatch(requestProject());
		return projects.getOne('projects', id)
			.then(response => dispatch(
				receiveProject(response))
			);
	};
}

function shouldFetchProject (state, category) {
	return !('_id' in state.project.project);
}

export function fetchProjectIfNeeded (id = false) {
	return (dispatch, getState) => {
		let should = shouldFetchProject(getState(), id);
		if (should) {
			return dispatch(fetchProject(id));
		}
	};
}
