import { combineReducers } from 'redux';
import projects from './reducers/projects';
import posts from './reducers/posts';

export default combineReducers({
	projects,
	posts
});
