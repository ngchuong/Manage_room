import {connect} from 'react-redux';
import ManageRoom from '../pages/manageRoom/manageRoom.js';
import { 
    getRooms,
    addRoom,
    updateRoom,
    delRoom,
 } from '../action/rooms.js';

const mapStateToProps = (state) => ({
	rooms: state.rooms,
})

const mapDispatchToProps = {
    getRooms: getRooms.start,
    addRoom: addRoom.start,
    updateRoom: updateRoom.start,
    delRoom: delRoom.start,
}

const manageRoom = connect (
    mapStateToProps,
    mapDispatchToProps
)(ManageRoom);

export default manageRoom;

