import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import CommentForm from '../CommentForm';
import useAuth from '../../auth/useAuth';
import Answer from '../Answer';
import { ReactComponent as TrashIcon } from '../../icons/trash.svg';
import './Question.css';
import Avatar from '../Avatar';

const Question = ({
    loading,
    answers,
    title = 'No title',
    text,
    onAnswerAdd,
    onQuestionDelete,
    onAnswerDelete,
    isOpened,
    onClick,
    author,
}) => {
    const { isLoggedIn } = useAuth();

    const handleSubmitAnswer = data => onAnswerAdd(data);
    const handleDeleteQuestion = () => onQuestionDelete();
    const handleAnswerDelete = id => onAnswerDelete(id);

    return (
        <div
            className={classNames('question', {
                'question--opened': isOpened,
            })}
        >
            <div className="question__title-line">
                <Avatar
                    size={40}
                    url={author.avatar}
                    className="question__avatar"
                />
                <div onClick={onClick} className="question__title">
                    <span>{title}</span>
                </div>
                {onQuestionDelete && (
                    <TrashIcon
                        className="question__delete"
                        onClick={handleDeleteQuestion}
                    />
                )}
            </div>
            <div className="question__list">
                <div>{text}</div>

                {answers ? (
                    <div>
                        <h3>Answers:</h3>
                        {Object.keys(answers).map(answerId => (
                            <Answer
                                {...answers[answerId]}
                                key={answerId}
                                onAnswerDelete={() =>
                                    handleAnswerDelete(answerId)
                                }
                            />
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
