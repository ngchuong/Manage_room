import { connect } from 'react-redux';
import ManageUser from '../pages/manageUser/manageUser.js';
import { getUsers } from '../action/users.js'


const mapStateToProps = (state) => ({
	users: state.users,
})

const mapDispatchToProps = {
	getUsers: getUsers.start,
	// createUser: createUser.start,
	// editUser: editUser.start,
	// deleteUser: delUser.start,
}

const manageUser = connect(
	mapStateToProps,
	mapDispatchToProps
)(ManageUser)

export default manageUser;