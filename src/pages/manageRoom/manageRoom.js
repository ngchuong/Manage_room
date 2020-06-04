import React, { useEffect, useState } from 'react';
import './manageRoom.scss';
import Table from '../../components/pages/table/table.js';
import Button from '../../components/core/button/button.js';
import ModalRender from '../../components/pages/Modal/Modal';

function ManageRoom({ getRooms, rooms, addRoom, updateRoom, delRoom }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [dataModal, setDataModal] = useState({});
    const [typeModal, setTypeModal] = useState();

    useEffect(() => {
        getRooms();
    }, [getRooms])

    const testArrUser = [
        {
            name: "chuog",
            age: 18,
            sex: "nam",
            images: "123",
            type_room: "1"
        },
        {
            name: "lorem",
            age: 11,
            sex: "nu",
            images: "11",
            type_room: "2"
        },
    ]

    const onOpenModalAdd = () => {
        setTypeModal("add");
        setDataModal({});
        setIsOpenModal(true);
    }

    const onOpenModalEdit = (data) => {
        setTypeModal("edit");
        setDataModal(data);
        setIsOpenModal(true);

    }

    const onOpenModalDel = (data) => {
        setTypeModal("delete");
        setDataModal(data);
        setIsOpenModal(true);
    }

    const onCloseModal = () => {
        setIsOpenModal(false)
    }

    const onAdd = (oldRoom, newRoom) => {
        addRoom(newRoom);
    }
    const onEdit = () => {
        updateRoom();
    }

    const onDel = () => {
        delRoom();
    }

    return (
        <div className="container-manage-room">
            <div className="title-table">Quản lý Room</div>
            <div className="add-row">
                <Button
                    handleClick={onAdd}
                    title={"Add new Room"}
                    cls={"btn-submit"}
                    icon={<i class="fa fa-plus-circle"></i>}
                />
            </div>
            <div className="content-table">
                <Table
                    dataSource={rooms}
                    onOpenModalEdit={onOpenModalEdit}
                    onOpenModalDel={onOpenModalDel}
                />
            </div>
            <ModalRender
                isOpen={isOpenModal}
                onCloseModal={onCloseModal}
                dataForm={dataModal}
                data={testArrUser}
                onAdd={onAdd}
                onEdit={onEdit}
                onDel={onDel}
                typeHandle={typeModal}
            />
        </div>
    );
}

export default ManageRoom;