import React from 'react';
import classNames from 'classnames';
import './Title.css';

const Title = ({ text, centered, uppercase, color }) => (
    <h1
        className={classNames('title', {
            'title--centered': centered,
            'title--uppercase': uppercase,
        })}
        style={{ color }}
    >
        {text}
    </h1>
);

export default Title;
