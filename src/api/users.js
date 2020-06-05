import axios from 'axios';

export const getUsersFactory = () => {
	const getUserList = async () => {
		const response = await axios.get('http://localhost:80/API_PHP/users/getUsers.php');
		if (response.status !== 200) {
			throw new Error('Get data failed !');
		}
		const data = response.data;
		const result = data.filter(item => item.isActive === "1");
		// console.log(result)

		return result;
	}
	return getUserList;
};

export const createUserFactory = () => {
	const createUser = async (user) => {
		const reqBody = {
			name: user.name,
			phone_number: user.phone_number,
			password: user.password,
			email: user.email
		}

		const response = await axios.post('http://localhost:80/API_PHP/users/postUsers.php', reqBody, {
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
		const reqBody = {
			name: newUser.name,
			phone_number: newUser.phone_number,
			password: newUser.password,
			email: newUser.email,
			id: newUser.id
		}
		const response = await axios.patch('http://localhost:80/API_PHP/users/putUsers.php', reqBody,
			{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
		);

		if (response.status !== 200) {
			throw new Error("Create user failed");
		}
		console.log(reqBody);
		const result = reqBody;
		return result;
	}
	return updateUser;
}

export const delUserFactory = () => {
	const delUser = async (user) => {
		const reqBody = { id: user.id };
		const response = await axios.patch(`http://localhost:80/API_PHP/users/delUsers.php`, reqBody,
			{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
		);
		if (response.status !== 200) {
			throw new Error('Delete user failed');
		}
		const result = reqBody.id;
		return result;
	}
	return delUser;
}