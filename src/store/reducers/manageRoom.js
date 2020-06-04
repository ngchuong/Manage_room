import { createReducer } from '../../utils/redux.js';

import {
    GET_ROOM_SUCCEED,
    ADD_ROOM_SUCCEED,
    UPDATE_ROOM_SUCCEED,
    DEL_ROOM_SUCCEED,
} from '../../action/rooms';

function requestRoomSuccess (state, rooms) {
    return rooms;
}

function addRoomSuccess(state, payload) {
    return [...state, payload];
}

function updateRoomSuccess(state, payload) {
    return state.map(item => (item.id === payload.id ? { ...item, ...payload } : item));
}

function delRoomSuccess(state, payload) {
    return state.filter(item => item.id !== payload);
}

export default createReducer([],{
    [GET_ROOM_SUCCEED]: requestRoomSuccess,
    [ADD_ROOM_SUCCEED]: addRoomSuccess,
    [UPDATE_ROOM_SUCCEED]: updateRoomSuccess,
    [DEL_ROOM_SUCCEED]: delRoomSuccess,
})