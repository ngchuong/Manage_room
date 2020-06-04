import {
	GET_USER_SUCCEED,
	ADD_USER_SUCCEED,
	UPDATE_USER_SUCCEED,
	DEL_USER_SUCCEED,
	GET_USER_FAILED,
	ADD_USER_FAILED,
	UPDATE_USER_FAILED,
	DEL_USER_FAILED
} from '../../action/users.js';

import {
	GET_ROOM_SUCCEED,
	ADD_ROOM_SUCCEED,
	UPDATE_ROOM_SUCCEED,
	DEL_ROOM_SUCCEED,
	GET_ROOM_FAILED,
	ADD_ROOM_FAILED,
	UPDATE_ROOM_FAILED,
	DEL_ROOM_FAILED
} from '../../action/rooms.js';

const ui = (state = { dialog: null }, action) => {
	let msg = "";
	switch (action.type) {
		case GET_USER_SUCCEED:
		case GET_ROOM_SUCCEED:
			msg = "Get data success !";
			return {
				...state,
				dialog: msg
			}
		case ADD_ROOM_SUCCEED:
		case ADD_USER_SUCCEED:
			msg = "Add data success !";
			return {
				...state,
				dialog: msg
			}
		case UPDATE_USER_SUCCEED:
		case UPDATE_ROOM_SUCCEED:
			msg = "Update data success !";
			return {
				...state,
				dialog: msg
			}
		case DEL_USER_SUCCEED:
		case DEL_ROOM_SUCCEED:
			msg = "Delete data success !";
			return {
				...state,
				dialog: msg
			}
		case GET_ROOM_FAILED:
		case GET_USER_FAILED:
			msg = "Get data failed !";
			return {
				...state,
				dialog: msg
			}
		case ADD_ROOM_FAILED:
		case ADD_USER_FAILED:
			msg = "Add data failed !";
			return {
				...state,
				dialog: msg
			}
		case UPDATE_ROOM_FAILED:
		case UPDATE_USER_FAILED:
			msg = "Update data failed !";
			return {
				...state,
				dialog: msg
			}
		case DEL_ROOM_FAILED:
		case DEL_USER_FAILED:
			msg = "Delete data failed !";
			return {
				...state,
				dialog: msg
			}
		default:
			return state;
	}
}

export default ui;