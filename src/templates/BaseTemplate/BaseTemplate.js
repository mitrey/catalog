import React from 'react';
import './BaseTemplate.css';
import Navbar from '../../components/Navbar/Navbar';
import { ReactComponent as CoronaIcon } from '../../icons/corona.svg';

const BaseTemplate = ({ header, toolsLine, content }) => (
    <div className="base-template">
        <CoronaIcon className="base-template__icon" />
        <div className="base-template__header">
            <Navbar />
            {header}
        </div>
        <div className="base-template__content-wrapper">
            <div className="base-template__tools">{toolsLine}</div>
            <div className="base-template__content">{content}</div>
        </div>
    </div>
);

export default BaseTemplate;
