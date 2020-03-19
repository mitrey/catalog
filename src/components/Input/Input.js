import React from 'react';
import classNames from 'classnames';
import './Input.css';

const Input = ({ value, onChange, placeholder, className }) => {
    return (
        <input
            className={classNames('input', className)}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
        />
    );
};

export default Input;
