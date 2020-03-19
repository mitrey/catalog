import React from 'react';
import './Answer.css';

const Answer = ({ date = Date.now(), author, text }) => {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    const dateString = day + '-' + (month + 1) + '-' + year;

    return (
        <div className="answer">
            <div className="answer-content">
                {author && <div className="answer-author">{author.name}</div>}
                <div className="answer-date">{dateString}</div>
                <div className="answer-text">{text}</div>
            </div>
        </div>
    );
};

export default Answer;
