import React, { useEffect, useState } from 'react';
import './Modal.scss';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Select from 'react-select';

import Button from '../../core/button/button';
import Input from '../../core/input/input';

const ModalRender = ({ isOpen, onCloseModal, dataForm, data, onEdit, onDel, onAdd, typeHandle }) => {
    const [formData, setFormData] = useState();

    const arrTypeRoom = [
        {
            value: 1,
            label: 'Cho thuê',
        },
        {
            value: 2,
            label: 'Để bán'
        }
    ]

    useEffect(() => {
        if (dataForm == null) {
            setFormData({});
        } else {
            setFormData({ ...dataForm });
        }
    }, [dataForm])

    let listField = [];
    if (data !== undefined) {
        const newObj = data[0];
        if (newObj !== undefined) {
            listField = Object.getOwnPropertyNames(newObj);
        }
    }

    const handleInputChange = (e, item) => {
        let valueInput = e.target.value;
        setFormData({ ...formData, [item]: valueInput });
    }

    const handleSelectChange = (e) => {
        setFormData({ ...formData, type_room: e.target.value });
    }

    const handleFileChange = (e) => {
        let listImage = [];
        const images = e.target.files;
        for (let i = 0; i < images.length; i++) {
            listImage = [...listImage, images[i].name];
        }
        setFormData({ ...formData, listImage })

    }
    const components = (item) => {
        let value = '';
        if (formData) {
            value = formData[item] || '';
        }
        if (item === "images") {
            return (
                <form encType="multipart/form-data">
                    <input type="file" multiple onChange={handleFileChange} />
                </form>
            )
        } else if (item === "type_room") {
            value = "1";
            return (
                <select defaultValue={value} onChange={handleSelectChange}>
                    {/* <option disabled>--Chọn kiểu phòng--</option> */}
                    <option value="1">Cho thuê</option>
                    <option value="2">Để bán</option>
                </select>
            )
        }
        return (
            <Input
                placeholder={item}
                value={value}
                onChange={handleInputChange}
                item={item}
                cls={"input"}
                type={(item === "password") ? "password" : "text"}
            />
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();

        let newData = { ...formData };
        let newArr = Object.values(newData);
        if (newArr.length < listField.length) {
            return
        }
        if (typeHandle === "delete") {
            onDel(data);
        } else if (typeHandle === "edit") {
            onEdit && onEdit(data, newData);
        } else {
            onAdd && onAdd(data, newData);
        }
    }

    let titleForm = 'Title Form';
    let bodyModalForm = '';

    if (typeHandle === "edit") {
        titleForm = "FORM EDIT";
        bodyModalForm = listField.map((item, index) => (
            <div key={index}>
                <div className="col-25">
                    <span>{item}</span>
                </div>
                <div className="col-75">
                    {components(item)}
                </div>
            </div>
        ));
    } else if (typeHandle === "delete") {
        titleForm = "FORM DELETE";
        bodyModalForm = <div className="delete-item">Do you want to delete ?</div>;
    } else if (typeHandle === "add") {
        titleForm = "FORM ADD";
        bodyModalForm = listField.map((item, index) => (
            <div key={index}>
                <div className="col-25">
                    <span>{item}</span>
                </div>
                <div className="col-75">
                    {components(item)}
                </div>
            </div>
        ));
    }
    return (
        <div className="modal-container">
            <Modal classNames="modal" open={isOpen} onClose={onCloseModal} center>
                <div className="modal-header">
                    {titleForm}
                </div>
                <div className="modal-body">
                    <div>
                        {bodyModalForm}
                    </div>
                </div>
                <div className="modal-foot">
                    <span>
                        <Button
                            handleClick={onSubmit}
                            title={'Submit'}
                            cls={'btn-submit'} />
                    </span>
                    <span>
                        <Button
                            handleClick={onCloseModal}
                            title={'Cancel'}
                            cls={'btn-cancel'} />
                    </span>
                </div>
            </Modal>
        </div>
    )
}

export default ModalRender;