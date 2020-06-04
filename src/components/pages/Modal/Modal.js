import React, { useEffect, useState } from 'react';
import './Modal.scss';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import Button from '../../core/button/button';
import Input from '../../core/input/input';

const ModalRender = ({ isOpen, onCloseModal, dataForm, data, onEdit, onDel, onAdd, typeHandle }) => {
    const [formData, setFormData] = useState();

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

    const components = (item) => {
        let value = '';
        if (formData) {
            value = formData[item] || '';
        }
        if (item === "images") {
            return (
                <input type="file" multiple />
            )
        } else if (item === "type_room") {
            return (
                <select>
                    <option></option>
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
                    <Button
                        handleClick={onSubmit}
                        title={'Submit'}
                        cls={'btn-submit'} /> 
                    <Button
                        handleClick={onCloseModal}
                        title={'Cancel'}
                        cls={'btn-cancel'} />
                </div>
            </Modal>
        </div>
    )
}

export default ModalRender;