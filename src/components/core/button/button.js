import React from 'react';
import './button.scss';
const Button = ({title, handleClick, cls, icon}) => (
    <span className="container-button">
        <button className={cls} onClick={handleClick}>{icon} {title}</button>
    </span>
)

export default Button;