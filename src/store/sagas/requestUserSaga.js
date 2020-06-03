import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_USER_START,
    getUsers,
} from '../../action/users.js';
import { getUsersFactory } from '../../api/users';

function* requestUsersSaga() {
    try {
        const api = getUsersFactory();
        const response = yield call(api);
        yield put(getUsers.succed(response));
    } catch (err) {
        yield put(getUsers.failed(err));
    }
}

export default function* watchUser() {
    yield takeLatest(GET_USER_START, requestUsersSaga);
}