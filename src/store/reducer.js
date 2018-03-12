import { combineReducers } from 'redux';
import projects from './reducers/projects';
import posts from './reducers/posts';
import project from './reducers/project';

export default combineReducers({
	projects,
	posts,
	project
});
