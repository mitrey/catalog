import React from 'react';
import './EmergencyInfoBlock.css';

const i = [{ id: 1, type: 'Telegram', value: '@t.gram.text' }];

const EmergencyInfoBlock = ({ items = i }) => {
    return (
        <div>
            <h3 className="title">Emergency Info</h3>
            {items.map(i => (
                <span key={i.id}>
                    {i.type} - ${i.value}
                </span>
            ))}
        </div>
    );
};

export default EmergencyInfoBlock;
