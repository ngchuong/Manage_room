import React, { useEffect, useState } from 'react';
import './table.scss';
import Button from '../../core/button/button';

const Table = ({ dataSource, onOpenModalEdit, onOpenModalDel }) => {

    //render table s
    const getKeys = () => {
        if (dataSource.length > 0) {
            return Object.keys(dataSource[0]);
        }
        return [];
    }

    const getHeader = () => {
        let keys = getKeys();

        return keys.map((item, index) => (
            <th key={index}>{item.toUpperCase()}</th>
        ))
    }

    const RenderRow = (props) => {
        return props.keys.map((key, index) => (
            <td key={index}>{props.data[key]}</td>
        ))
    }
    const getRowsData = () => {
        let items = dataSource;
        let keys = getKeys();
        return items.map((item, index) => (
            <tr key={index}>
                <RenderRow key={index} keys={keys} data={item} />
                <td ><Button
                    handleClick={() => onOpenModalEdit(item)}
                    title={'Edit'}
                    cls={'btn-submit'}
                    icon={<i className="fa fa-edit"></i>}
                /></td>
                <td ><Button
                    handleClick={() => onOpenModalDel(item)}
                    title={'Delete'}
                    cls={'btn-danger'}
                    icon={<i className="fa fa-trash"></i>}
                /></td>
            </tr>
        ))
    }

    //render table e

    return (
        <div className="container-table">
            <table className="table">
                <thead>
                    <tr>
                        {getHeader()}
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody >
                    {getRowsData()}
                </tbody>
            </table>
        </div>
    );
}
export default Table