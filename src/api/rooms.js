import axios from 'axios';

export const getRoomsFactory = () => {
	const getRoomList = async () => {
		const response = await axios.get('http://localhost:80/API_PHP/room/readRoom.php');
		if (response.status !== 200) {
			throw new Error('Get data failed !');
		}
		const data = response.data;

		let result = '';
		for (let i = 0; i < data.length; i++) {
			result = [
				...result,
				{
					id: data[i].id,
					title: data[i].title,
					address: data[i].address,
					acreage: data[i].acreage,
					bathroom: data[i].bathroom,
					bed: data[i].bed,
					phoneNumber: data[i].phone_number,
					price: data[i].price,
					path: data[i].path,
					typeRoom: data[i].type_room,
					// isActive: data[i].isActive,
					created: data[i].created,
				}
			]
		}
		return result;
	}

	return getRoomList;
};

export const addRoomFactory = () => {
	const addRoom = async (room) => {
		// console.log(room.listImage)
		const reqBody = {
			title: room.title,
			arr_image: JSON.stringify(room.listImage),
			address: room.address,
			acreage: room.acreage,
			bed: room.bed,
			bathroom: room.bathroom,
			price: room.price,
			id_user: 1,
			type_room: room.type_room
		}
		const response = await axios.post('http://localhost:80/API_PHP/room/createRoom.php', reqBody, {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		});
		if (response.status !== 200) {
			throw new Error("Create user failed");
		}
		const result = response.data;
		console.log(result);

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
