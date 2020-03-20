import React from 'react';
import Avatar from '../Avatar';
import { ReactComponent as TrashIcon } from '../../icons/trash.svg';
import './Answer.css';

const Answer = ({ date = Date.now(), author, text, onAnswerDelete }) => {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    const dateString = day + '-' + (month + 1) + '-' + year;

    return (
        <div className="answer">
            <div className="answer-content">
                <div className="answer-author">
                    <div className="answer-author-avatar">
                        <Avatar size={31} url={author.avatar} />
                    </div>
                    <div>
                        {author && (
                            <>
                                <div className="answer-author-name">
                                    {author.name}
                                </div>
                                <div className="answer-date">{dateString}</div>
                            </>
                        )}
                    </div>
                </div>
                <div className="answer-text">{text}</div>
                <TrashIcon className="answer-delete" onClick={onAnswerDelete} />
            </div>
        </div>
    );
};

export default Answer;
