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

const mapDispatchtoProps = {
    getRooms: getRooms.start,
    addRoom: addRoom.start,
    updateRoom: updateRoom.start,
    delRoom: delRoom.start,
}

const manageRoom = connect (
    mapStateToProps,
    mapDispatchtoProps
)(ManageRoom);

export default manageRoom;

