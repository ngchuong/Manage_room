import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_USER_START,
    ADD_USER_START,
    UPDATE_USER_START,
    DEL_USER_START,
    getUsers,
    createUser,
    updateUser,
    delUser
} from '../../action/users.js';

import {
    getUsersFactory,
    createUserFactory,
    updateUserFactory,
    delUserFactory,
} from '../../api/users';

function* requestUsersSaga() {
    try {
        const api = getUsersFactory();
        const response = yield call(api);
        yield put(getUsers.succeed(response));
    } catch (err) {
        yield put(getUsers.failed(err));
    }
}

function* createUserSaga(action) {
    const user = action.payload;
    try {
        const api = createUserFactory();

        const response = yield call(api, user);
        yield put(createUser.succeed(response));
    } catch (error) {
        yield put(createUser.failed(error));
    }
}

function* updateUserSaga(action) {
	const oldUser = action.payload.oldUser;
	const newUser = action.payload.newUser;
	try {
		const api = updateUserFactory();

		const response = yield call(api, oldUser, newUser);
		yield put(updateUser.succeed(response));
	} catch (error) {
		yield put(updateUser.failed(error));
	}
}

function* delUserSaga(action) {
	const user = action.payload;
	try {
		const api = delUserFactory();

        const response = yield call(api, user);
		yield put(delUser.succeed(response));
	} catch (error) {
		yield put(delUser.failed(error));
	}
}

export default function* watchUser() {
    yield takeLatest(GET_USER_START, requestUsersSaga);
    yield takeLatest(ADD_USER_START, createUserSaga);
    yield takeLatest(UPDATE_USER_START, updateUserSaga);
    yield takeLatest(DEL_USER_START, delUserSaga);
}