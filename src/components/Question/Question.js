import React, { useState } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import CommentForm from '../CommentForm';
import useAuth from '../../auth/useAuth';
import Answer from '../Answer';

import './Question.css';

const Question = ({ answers, title = 'No title', text, even, onAnswerAdd }) => {
    const [opened, setOpened] = useState(false);
    const { isLoggedIn } = useAuth();

    const handleSubmitAnswer = data => onAnswerAdd(data);

    return (
        <div
            className={classNames('question', {
                'question--opened': opened,
                'question--filled': even,
            })}
        >
            <div className="question__title" onClick={() => setOpened(!opened)}>
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
                      <CommentForm onSubmit={handleSubmitAnswer} />
                  </div>
                )}
            </div>
        </div>
    );
};

export default withRouter(Question);
