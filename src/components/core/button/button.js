import React from 'react';
import './button.scss';
const Button = ({title, handleClick, cls}) => (
    <span className="container-button">
        <button className={cls} onClick={handleClick}>{title}</button>
    </span>
)

export default Button;