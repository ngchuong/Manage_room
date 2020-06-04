export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCEED = "GET_USER_SUCCEED";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCEED = "ADD_USER_SUCCEED";
export const ADD_USER_FAILED = "ADD_USER_FAILED";

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCEED = "UPDATE_USER_SUCCEED";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const DEL_USER_START = "DEL_USER_START";
export const DEL_USER_SUCCEED = "DEL_USER_SUCCEED";
export const DEL_USER_FAILED = "DEL_USER_FAILED";

export const getUsers = {
    start: () => ({
        type: GET_USER_START,
    }),

    succed: (result) => ({
        type: GET_USER_SUCCEED,
        payload: result,
    }),

    failed: (err) => ({
        type: GET_USER_FAILED,
        payload: err,
    })
}

export const createUser = {
    start: () => ({
        type: ADD_USER_START,
    }),

    succed: (result) => ({
        type: ADD_USER_SUCCEED,
        payload: result,
    }),

    failed: (err) => ({
        type: ADD_USER_FAILED,
        payload: err,
    })
}

export const updateUser = {
    start: () => ({
        type: UPDATE_USER_START,
    }),

    succed: (result) => ({
        type: UPDATE_USER_SUCCEED,
        payload: result,
    }),

    failed: (err) => ({
        type: UPDATE_USER_FAILED,
        payload: err,
    })
}

export const delUser = {
    start: () => ({
        type: DEL_USER_START,
    }),

    succed: (result) => ({
        type: DEL_USER_SUCCEED,
        payload: result,
    }),

    failed: (err) => ({
        type: DEL_USER_FAILED,
        payload: err,
    })
}