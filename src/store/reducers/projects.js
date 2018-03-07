import {
	REQUEST_PROJECTS,
	RECEIVE_PROJECTS
} from './../actions/projects';

let defaultState = {
	isFetching: false,
	didInvalidate: false,
	items: []
};

function projects(state = defaultState, action) {
	switch (action.type) {
		case RECEIVE_PROJECTS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.projects,
				lastUpdated: action.receivedAt
			});
		case REQUEST_PROJECTS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				items: []
			});
		default:
			return state;
	}
}

export default projects;
