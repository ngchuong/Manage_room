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
	return 1;
}


export const updateUserFactory = () => {
	return 1;
}

export const delUserFactory = () => {
	return 1;
}