import { combineReducers } from 'redux';
import projects from './reducers/projects';
import project from './reducers/project';

export default combineReducers({
	projects,
	project
});
