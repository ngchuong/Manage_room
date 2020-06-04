import React from 'react';
import './input.scss';

const Input = ({ placeholder, item, onChange,type, value, cls, ...props }) => {
    const handleChange = (e) => {
        onChange && onChange(e, item);
    }
    return (
        <div className="container-input">
            <input className={cls} {...props} onChange={handleChange} type={type} value={value} />
        </div>
    )
}

export default Input;