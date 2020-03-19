import React from 'react';
import classNames from 'classnames';
import './Button.css';

const Button = ({ label, onClick, className, disabled }) => {
    return (
        <button
            disabled={disabled}
            className={classNames('button', className)}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
