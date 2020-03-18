import React from 'react';
import './Input.css';

const Input = ({ value, onChange }) => {
    return (
        <input
            className="input"
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    );
};

export default Input;
