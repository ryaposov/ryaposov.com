import store from './index';
import { persistStore } from 'redux-persist';

export default () => {
	let persistor = persistStore(store);
	return { store, persistor };
};
