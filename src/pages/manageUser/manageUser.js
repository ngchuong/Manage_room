import React, { useEffect, useState } from 'react';
import './manageUser.scss';
import Table from '../../components/pages/table/table.js';
import Button from '../../components/core/button/button.js';
import ModalRender from '../../components/pages/Modal/Modal';

function ManageUser({ getUsers, users, addUser, updateUser, deleteUser }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [dataModal, setDataModal] = useState({});
    const [typeModal, setTypeModal] = useState();

    let dataToModal = '';
    for (let i = 0; i < users.length; i++) {
        dataToModal = [
            ...dataToModal,
            {
                name: users[i].name,
                phone_number: users[i].phone_number,
                password: users[i].password,
                email: users[i].email
            }
        ]
    }

    useEffect(() => {
        getUsers();
    }, [getUsers])

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
                    title={"Add User"}
                    cls={"btn-submit"}
                    icon={<i className="fa fa-plus-circle"></i>}
                />
            </div>
            <div className="content-table">
                <Table
                    dataSource={users}
                    onOpenModalEdit={onOpenModalEdit}
                    onOpenModalDel={onOpenModalDel}
                />
            </div>
            <ModalRender
                isOpen={isOpenModal}
                onCloseModal={onCloseModal}
                dataForm={dataModal}
                data={dataToModal}
                onAdd={onAdd}
                onEdit={onEdit}
                onDel={onDel}
                typeHandle={typeModal}
            />
        </div>
    );
}

export default ManageUser;