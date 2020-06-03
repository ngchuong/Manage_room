import React from 'react';
import './input.scss';

const Input = ({ placeholder, onChange, value, cls }) => (
    <div className="container-input">
        <input className={cls} placeholder={placeholder} onChange={onChange} value={value}/>
    </div>
)

export default Input;