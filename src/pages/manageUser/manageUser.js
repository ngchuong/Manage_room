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
            sex: "nam"
        },
        {
            name: "lorem",
            age: 11,
            sex: "nu"
        },
    ]


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

    const onEdit = () => {
        updateUser();
    }

    const onDel = () => {
        deleteUser();
    }
    return (
        <div className="container-manage-user">
            <div className="title-table">Quản lý User</div>
            <div className= "add-row">
                <Button 
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
                onEdit={onEdit}
                onDel={onDel}
                typeHandle={typeModal}
            />
        </div>
    );
}

export default ManageUser;