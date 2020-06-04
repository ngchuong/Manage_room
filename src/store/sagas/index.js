import { all } from 'redux-saga/effects';
import watchUser from './requestUserSaga';
import watchRoom from './requestRoomSaga';

export default function* rootSaga() {
	yield all([
		watchUser(),
		watchRoom(),
	])
}