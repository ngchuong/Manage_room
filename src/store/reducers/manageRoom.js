import { createReducer } from '../../utils/redux.js';

import {
    GET_ROOM_SUCCEED,
} from '../../action/rooms';

function requestRoomSuccess (state, rooms) {
    return rooms;
}

export default createReducer([],{
    [GET_ROOM_SUCCEED]: requestRoomSuccess,
})