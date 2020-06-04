import { combineReducers } from "redux";
import users from './manageUser';
import rooms from './manageRoom';
import ui from './ui';
export default combineReducers({
	users,
	rooms,
	ui
})