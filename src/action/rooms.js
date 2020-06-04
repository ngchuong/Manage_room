export const GET_ROOM_START = "GET_ROOM_START";
export const GET_ROOM_SUCCEED = "GET_ROOM_SUCCEED";
export const GET_ROOM_FAILED = "GET_ROOM_FAILED";

export const ADD_ROOM_START = "ADD_ROOM_START";
export const ADD_ROOM_SUCCEED = "ADD_ROOM_SUCCEED";
export const ADD_ROOM_FAILED = "ADD_ROOM_FAILED";

export const UPDATE_ROOM_START = "UPDATE_ROOM_START";
export const UPDATE_ROOM_SUCCEED = "UPDATE_ROOM_SUCCEED";
export const UPDATE_ROOM_FAILED = "UPDATE_ROOM_FAILED";

export const DEL_ROOM_START = "DEL_ROOM_START";
export const DEL_ROOM_SUCCEED = "DEL_ROOM_SUCCEED";
export const DEL_ROOM_FAILED = "DEL_ROOM_FAILED";

export const getRooms = {
    start: () => ({
        type: GET_ROOM_START,
    }),

    succeed: (result) => ({
        type: GET_ROOM_SUCCEED,
        payload: result,
    }),

    failed: (err) => ({
        type: GET_ROOM_FAILED,
        payload: err,
    })
}

export const addRoom = {
    start: (room) => ({
        type: ADD_ROOM_START,
        payload: room
    }),

    succeed: (result) => ({
        type: ADD_ROOM_SUCCEED,
        payload: result,
    }),

    failed: (err) => ({
        type: ADD_ROOM_FAILED,
        payload: err,
    })
}

export const updateRoom = {
    start: (oldRoom, newRoom) => ({
        type: UPDATE_ROOM_START,
        payload: { oldRoom, newRoom }
    }),

    succeed: (result) => ({
        type: UPDATE_ROOM_SUCCEED,
        payload: result,
    }),

    failed: (err) => ({
        type: UPDATE_ROOM_FAILED,
        payload: err,
    })
}

export const delRoom = {
    start: (id) => ({
        type: DEL_ROOM_START,
        payload: id
    }),

    succeed: (result) => ({
        type: DEL_ROOM_SUCCEED,
        payload: result,
    }),

    failed: (err) => ({
        type: DEL_ROOM_FAILED,
        payload: err,
    })
}

