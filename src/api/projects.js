import api from './index';

export const getAll = async () => {
	try {
		const data = await api('/projects/');
		return Promise.resolve(data);
	} catch (error) {
		return Promise.resolve(error);
	}
};

export const getOne = async (id) => {
	try {
		const data = await api(`/projects/${id}`);
		return Promise.resolve(data);
	} catch (error) {
		return Promise.resolve(error);
	}
};
