import React from 'react';
import classNames from 'classnames';
import './Avatar.css';

const Avatar = ({ url, size = 40, className }) => (
    <span
        className={classNames('avatar', className)}
        style={{ width: size, height: size }}
    >
        {url ? <img src={url} alt="" /> : null}
    </span>
);

export default Avatar;
