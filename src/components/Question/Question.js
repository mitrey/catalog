import React, { useState } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import CommentForm from '../CommentForm';
import useAuth from '../../auth/useAuth';
import Answer from '../Answer';

import './Question.css';
import Avatar from '../Avatar';

const Question = ({
    loading,
    answers,
    title = 'No title',
    text,
    onAnswerAdd,
    isOpened,
    onClick,
}) => {
    const { isLoggedIn, user } = useAuth();

    const handleSubmitAnswer = data => onAnswerAdd(data);

    return (
        <div
            className={classNames('question', {
                'question--opened': isOpened,
            })}
        >
            <div className="question__title" onClick={onClick}>
                <Avatar
                    size={40}
                    url={user.avatar}
                    className="question__avatar"
                />
                {title}
            </div>
            <div className="question__list">
                <div>{text}</div>

                {answers ? (
                    <div>
                        <h3>Answers:</h3>
                        {Object.keys(answers).map(answerId => (
                            <Answer {...answers[answerId]} key={answerId} />
                        ))}
                    </div>
                ) : (
                    <div className="question__empty">No answers yet</div>
                )}

                {isLoggedIn && (
                    <div className="question__answer-form">
                        <CommentForm
                            loading={loading}
                            onSubmit={handleSubmitAnswer}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default withRouter(Question);
