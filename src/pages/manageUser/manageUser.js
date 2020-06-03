import React, { useEffect, useState } from 'react';
import './manageUser.scss';
import Table from '../../components/pages/table/table.js';
import Button from '../../components/core/button/button.js';
import ModalRender from '../../components/pages/Modal/Modal';

function ManageUser({ getUsers, users }) {
    useEffect(() => {
        getUsers();
    }, [getUsers])

    const [isOpenModal, setIsOpenModal] = useState(false);

    const onEdit = (e) => {
        setIsOpenModal(true);
    }

    const onDel = (e) => {

    }

    return (
        <div className="container-manage-user">
            <div className="title-table">Quản lý User</div>
            <div className="content-table">
                <Table dataSource={users} onEdit={onEdit} onDel={onDel} />
            </div>
            <ModalRender isOpen={isOpenModal} />
        </div>
    );
}

export default ManageUser;