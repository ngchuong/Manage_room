import React, { useEffect, useState } from 'react';
import './manageUser.scss';
import Table from '../../components/pages/table/table.js';
import Button from '../../components/core/button/button.js';
import ModalRender from '../../components/pages/Modal/Modal';

function ManageUser({ getUsers, users, addUser, updateUser, deleteUser }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [dataModal, setDataModal] = useState({});
    const [typeModal, setTypeModal] = useState();

    useEffect(() => {
        getUsers();
    }, [getUsers])

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

    const onAdd = (oldUser, newUser) => {
        addUser(newUser);
    }
    const onEdit = (oldUser, newUser) => {
        updateUser(oldUser, newUser);
        setIsOpenModal(false);
    }

    const onDel = () => {
        deleteUser(dataModal);
    }
    return (
        <div className="container-manage-user">
            <div className="title-table">Quản lý User</div>
            <div className="add-row">
                <Button
                    handleClick={onOpenModalAdd}
                    title={"Add new User"}
                    cls={"btn-submit"}
                    icon={<i class="fa fa-plus-circle"></i>}
                />
            </div>
            <div className="content-table">
                <Table
                    dataSource={testArrUser}
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

export default ManageUser;