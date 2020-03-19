import React, { useState } from 'react';
import './CommentForm.css';

const CommentForm = ({ onSubmit, loading }) => {
    const [comment, setComment] = useState('');

    const canSend = comment && comment.length > 10;

    const handleSubmit = val => {
        if (canSend) {
            onSubmit(val);
            setComment('');
        }
    };

    return (
        <div className="comment-form">
            <textarea
                className="comment-text"
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            <button
                disabled={!canSend || loading}
                className="comment-button"
                onClick={() => handleSubmit(comment)}
            >
                {loading ? 'Please wait' : 'Send'}
            </button>
        </div>
    );
};

export default CommentForm;
