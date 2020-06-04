import axios from 'axios';

export const getRoomsFactory = () => {
	const getRoomList = async () => {
		const response = await axios.get('http://localhost:80/API_PHP/room/readRoom.php');
		if (response.status !== 200) {
			throw new Error('Get data failed !');
		}
		const result = response.data;
		return result;
	}

	return getRoomList;
};

export const addRoomFactory = () => {
	const addRoom = async (room) => {
		const reqBody = {
			room
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
	return addRoom;
}

export const updateRoomFactory = () => {
	const updateRoom = async (oldRoom, newRoom) => {
		const reqBody = {
			newRoom
		};
		const response = await axios.patch('api', reqBody,
			{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
		);

		if (response.status !== 200) {
			throw new Error("Create user failed");
		}
		const result = newRoom;
		return result;
	}
	return updateRoom;
}
export const delRoomFactory = () => {
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
