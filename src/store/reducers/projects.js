import {
	RECEIVE_PROJECTS,
	REQUEST_PROJECTS
} from './../actions/projects';

let defaultState = {
	isFetching: false,
	items: []
};

function projects(state = defaultState, action) {
	switch (action.type) {
		case REQUEST_PROJECTS:
			return Object.assign({}, state, {
				isFetching: true,
				items: []
			});
		case RECEIVE_PROJECTS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.projects,
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
}

export default projects;
