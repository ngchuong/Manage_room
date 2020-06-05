import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_ROOM_START,
    ADD_ROOM_START,
    UPDATE_ROOM_START,
    DEL_ROOM_START,
    getRooms,
    addRoom,
    updateRoom,
    delRoom
} from '../../action/rooms.js';
import { 
    getRoomsFactory,
    addRoomFactory,
    updateRoomFactory,
    delRoomFactory
 } from '../../api/rooms';

function* requestRoomSaga() {
    try {
        
        const api = getRoomsFactory();
        const response = yield call(api);
        yield put(getRooms.succeed(response));

    } catch (err) {
        yield put(getRooms.failed(err))
    }
}

function* addRoomSaga(action) {
	const room = action.payload;
	try {
		const api = addRoomFactory();

		const response = yield call(api, room);
		yield put(addRoom.succeed(response));
	} catch (error) {
		yield put(addRoom.failed(error));
	}
}

function* updateRoomSaga(action) {
	const oldRoom = action.payload.oldRoom;
	const newRoom = action.payload.newRoom;
	try {
		const api = updateRoomFactory();

		const response = yield call(api, oldRoom, newRoom);
		yield put(updateRoom.succeed(response));
	} catch (error) {
		yield put(updateRoom.failed(error));
	}
}

function* delRoomSaga(action) {
	const room = action.payload;
	try {
		const api = delRoomFactory();

		const response = yield call(api, room);
		console.log(response)
		yield put(delRoom.succeed(response));
	} catch (error) {
		yield put(delRoom.failed(error));
	}
}


export default function* watchRoom() {
    yield takeLatest(GET_ROOM_START, requestRoomSaga);
    yield takeLatest(ADD_ROOM_START, addRoomSaga);
    yield takeLatest(UPDATE_ROOM_START, updateRoomSaga);
    yield takeLatest(DEL_ROOM_START, delRoomSaga);
}