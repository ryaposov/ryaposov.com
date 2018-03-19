import * as projects from '../../api/crud';
import store from '../../store';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';

function receiveProjects(response) {
	return {
		type: RECEIVE_PROJECTS,
		receivedAt: Date.now(),
		projects: response
	};
}

function requestProjects({ projects }) {
	return {
		type: REQUEST_PROJECTS,
		projects: 'items' in projects ? projects.items : []
	};
}

export function fetchProjects(category = false) {
	store.dispatch(requestProjects(store.getState()));
	projects.getAll('projects').then(response => {
		if (validateProjectsResponse(response)) {
			return store.dispatch(receiveProjects(response.bodyJson));
		}
	});
}

function validateProjectsResponse (response) {
	return response.status === 200 && response.bodyJson;
}
