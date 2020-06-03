import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_ROOM_START,
    getRooms,
} from '../../action/rooms.js';
import { getRoomsFactory } from '../../api/rooms';

function* requestRoomSaga() {
    try {
        
        const api = getRoomsFactory();
        const response = yield call(api);
        yield put(getRooms.succed(response));

    } catch (err) {
        yield put(getRooms.failed(err))
    }
}

export default function* watchRoom() {
    yield takeLatest(GET_ROOM_START, requestRoomSaga);
}