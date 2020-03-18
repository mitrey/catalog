import React, { useState } from 'react';
import classNames from 'classnames';
import './Question.css';

const Question = ({ answers, title = 'No title', text, author, even }) => {
    const [opened, setOpened] = useState(false);

    return (
        <div
            className={classNames('question', {
                'question--opened': opened,
                'question--filled': even,
            })}
            onClick={() => setOpened(!opened)}
        >
            <div className="question__title">{title}</div>
            <div className="question__list">
                <div>{text}</div>
                {answers ? (
                    <div>
                        <h3>Answers:</h3>
                        {answers.map(a => (
                            <div key={a.id}>{a.text}</div>
                        ))}
                    </div>
                ) : (
                    'No answers yet'
                )}
            </div>
        </div>
    );
};

export default Question;
