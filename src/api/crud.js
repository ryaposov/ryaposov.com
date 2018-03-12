import api from './index';

export const getAll = async (collection) => {
	try {
		const data = await api(`/crud/${collection}/`, { method: 'GET' });
		return Promise.resolve(data);
	} catch (error) {
		return Promise.resolve(error);
	}
};

export const getOne = async (collection, id) => {
	try {
		const data = await api(`/crud/${collection}/${id}`, { method: 'GET' });
		return Promise.resolve(data);
	} catch (error) {
		return Promise.resolve(error);
	}
};

export const editOne = async (collection, id, body) => {
	try {
		const data = await api(`/secure/${collection}/${id}`, {
			method: 'PUT',
			body: JSON.stringify(body)
		});
		return Promise.resolve(data);
	} catch (error) {
		return Promise.resolve(error);
	}
};

export const create = async (collection, body) => {
	try {
		const data = await api(`/secure/${collection}/create`, {
			method: 'POST',
			body: JSON.stringify(body)
		});
		return Promise.resolve(data);
	} catch (error) {
		return Promise.resolve(error);
	}
};

export const deleteOne = async (collection, id) => {
	try {
		const data = await api(`/secure/${collection}/${id}`, { method: 'DELETE' });
		return Promise.resolve(data);
	} catch (error) {
		return Promise.resolve(error);
	}
};

export const deleteMany = async (collection, ids) => {
	try {
		const data = await api(`/secure/${collection}/delete`, {
			method: 'POST',
			body: JSON.stringify(ids)
		});
		return Promise.resolve(data);
	} catch (error) {
		return Promise.resolve(error);
	}
};

export const search = async (collection, query) => {
	try {
		const data = await api(`/search/${collection ? collection + '/' : ''}?s=${query}`, { method: 'GET' });
		return Promise.resolve(data);
	} catch (error) {
		return Promise.resolve(error);
	}
};
