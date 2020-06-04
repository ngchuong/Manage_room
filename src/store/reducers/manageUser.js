import { createReducer } from '../../utils/redux.js';

import {
    GET_USER_SUCCEED,
    ADD_USER_SUCCEED,
    UPDATE_USER_SUCCEED,
    DEL_USER_SUCCEED
} from '../../action/users';

function requestUserSuccess (state, users) {
    return users;
}

function addUserSuccess(state, payload) {
    return [...state, payload];
}

function updateUserSuccess(state, payload) {
    return state.map(item => (item.id === payload.id ? { ...item, ...payload } : item));
}

function delUserSuccess(state, payload) {
    return state.filter(item => item.id !== payload);
}

export default createReducer([],{
    [GET_USER_SUCCEED]: requestUserSuccess,
    [ADD_USER_SUCCEED]: addUserSuccess,
    [UPDATE_USER_SUCCEED]: updateUserSuccess,
    [DEL_USER_SUCCEED]: delUserSuccess,
})