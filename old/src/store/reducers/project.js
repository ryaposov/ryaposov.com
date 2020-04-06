import {
	REQUEST_PROJECT,
	RECEIVE_PROJECT
} from './../actions/project';

let defaultState = {
	isFetching: false,
	didInvalidate: false,
	project: {}
};

function project(state = defaultState, action) {
	switch (action.type) {
		case RECEIVE_PROJECT:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				project: action.project,
				lastUpdated: action.receivedAt
			});
		case REQUEST_PROJECT:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				project: {}
			});
		default:
			return state;
	}
}

export default project;
