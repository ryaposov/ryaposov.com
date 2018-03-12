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
	projects.getAll('projects').then(response => {
		if (validateProjectsResponse(response)) {
			return store.dispatch(receiveProjects(response.bodyJson));
		}
	});
}

function validateProjectsResponse (response) {
	return response.status === 200 && response.bodyJson.length;
}
