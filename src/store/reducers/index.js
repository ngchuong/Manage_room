import { combineReducers } from "redux";
import users from './manageUser';
import rooms from './manageRoom';

export default combineReducers({
	users,
	rooms
})