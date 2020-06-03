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