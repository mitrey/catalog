import React from 'react';
import classNames from 'classnames';
import './Title.css';

const Title = ({ text, centered }) => (
    <h1 className={classNames('title', { 'title--centered': centered })}>
        {text}
    </h1>
);

export default Title;
