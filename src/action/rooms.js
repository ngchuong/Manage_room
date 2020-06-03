export const GET_ROOM_START = "GET_ROOM_START";
export const GET_ROOM_SUCCEED = "GET_ROOM_SUCCEED";
export const GET_ROOM_FAILED = "GET_ROOM_FAILED";

export const getRooms = {
    start: () => ({
        type: GET_ROOM_START,
    }),

    succed: (result) => ({
        type: GET_ROOM_SUCCEED,
        payload: result,
    }),

    failed: (err) => ({
        type: GET_ROOM_FAILED,
        payload: err,
    })
}

