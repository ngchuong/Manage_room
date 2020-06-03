import React, { useEffect, useState } from 'react';
import './manageRoom.scss';
import Table from '../../components/pages/table/table.js';
import Button from '../../components/core/button/button.js';

function ManageRoom({ getRooms, rooms }) {
    console.log(rooms)
    useEffect(() => {
        getRooms();
    }, [getRooms])
  

    return (
        <div className="container-manage-room">
            <div className="title-table">Quản lý Room</div>
            <div className="content-table">
                <Table dataSource={rooms} />
            </div>
        </div>
    );
}

export default ManageRoom;