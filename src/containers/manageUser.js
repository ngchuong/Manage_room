import { connect } from 'react-redux';
import ManageUser from '../pages/manageUser/manageUser.js';
import { 
	getUsers,
	createUser,
	updateUser,
	delUser,
 } from '../action/users.js'


const mapStateToProps = (state) => ({
	users: state.users,
})

const mapDispatchToProps = {
	getUsers: getUsers.start,
	addUser: createUser.start,
	updateUser: updateUser.start,
	deleteUser: delUser.start,
}

const manageUser = connect(
	mapStateToProps,
	mapDispatchToProps
)(ManageUser)

export default manageUser;