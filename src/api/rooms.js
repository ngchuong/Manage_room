import axios from 'axios';

export const getRoomsFactory = () => {
	const getRoomList = async () => {
		const response = await axios.get('http://localhost:80/API_PHP/room/readRoom.php');
		if (response.status !== 200) {
			throw new Error('Get data failed !');
		}
		const data = response.data;
		let newData = '';
		for (let i = 0; i < data.length; i++) {
			newData = [
				...newData,
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
					isActive: data[i].isActive,
					created: data[i].created,
				}
			]
		}
		const result = newData.filter(item => item.isActive === "1");
		return result;
	}

	return getRoomList;
};

export const addRoomFactory = () => {
	const addRoom = async (room) => {
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
		console.log(newRoom);
		const reqBody = newRoom;
		const response = await axios.patch('http://localhost:80/API_PHP/room/updateRoom.php', reqBody,
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
	const delUser = async (room) => {
		const reqBody = { id: room.id };

		const response = await axios.patch(`http://localhost:80/API_PHP/room/deleteRoom.php`, reqBody,
			{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
		);

		if (response.status !== 200) {
			throw new Error('Delete user failed');
		}

		return reqBody.id;
	}
	return delUser;
}
