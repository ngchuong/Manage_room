import axios from 'axios';

export const getUsersFactory = () => {
	const getUserList = async () => {
		const response = await axios.get('http://localhost:80/API_PHP/users/getUsers.php');
		if (response.status !== 200) {
			throw new Error('Get data failed !');
		}
		const result = response.data;
		return result;
	}
	return getUserList;
};

export const createUserFactory = () => {
	const createUser = async (user) => {
		const reqBody = {
			user
		}
	
		const response = await axios.post('api', reqBody, {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		});
		if (response.status !== 200) {
			throw new Error("Create user failed");
		}
		const result = response.data;
		return result;
	}
	return createUser;
}


export const updateUserFactory = () => {
	const updateUser = async (oldUser, newUser) => {
		const reqBody = newUser;
		const response = await axios.patch('api', reqBody,
			{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
		);

		if (response.status !== 200) {
			throw new Error("Create user failed");
		}
		const result = newUser;
		return result;
	}
	return updateUser;
}

export const delUserFactory = () => {
	const delUser = async (id) => {
		const response = await axios.delete(`api`,
			{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, data: { id } }
		);

		if (response.status !== 204) {
			throw new Error('Delete user failed');
		}
		return id;
	}
	return delUser;
}