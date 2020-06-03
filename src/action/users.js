export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCEED = "GET_USER_SUCCED";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCED = "CREATE_USER_SUCCED";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";

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
        type: CREATE_USER_START,
    }),

    succed: (result) => ({
        type: CREATE_USER_SUCCED,
        payload: result,
    }),

    failed: (err) => ({
        type: CREATE_USER_FAILED,
        payload: err,
    })
}