import { createReducer } from '../../utils/redux.js';

import {
    GET_USER_SUCCEED,
} from '../../action/users';

function requestUserSuccess (state, users) {
    return users;
}

export default createReducer([],{
    [GET_USER_SUCCEED]: requestUserSuccess,
})