import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import './AddQuestionForm.css';

const AddQuestionForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    return (
        <div className="add-question-form">
            <h2>Add your question:</h2>
            <div className="add-question-form__fields">
                <div>
                    <Input value={title} onChange={setTitle} />
                </div>
                <div>
                    <Input value={text} onChange={setText} />
                </div>
                <Button onClick={() => onSubmit(text, title)} label="Send" />
            </div>
        </div>
    );
};

export default AddQuestionForm;
