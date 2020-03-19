import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import './Form.css';

const Form = ({
    loading,
    onSubmit,
    fields,
    title,
    inputClassName,
    buttonClassName,
}) => {
    const [data, setData] = useState({});

    const canSend =
        Object.values(data).length === fields.length &&
        Object.values(data).filter(val => !val || val.length < 3).length === 0;

    const handleSubmit = () => {
        if (canSend) {
            onSubmit(data);
            setData({});
        }
    };

    return (
        <div className="form">
            <h2 className="form__title">{title}</h2>
            <div className="form__fields">
                {fields.map(f => (
                    <div key={f.name} className="form__field">
                        <Input
                            className={inputClassName}
                            value={data[f.name] || ''}
                            onChange={value =>
                                setData({ ...data, [f.name]: value })
                            }
                            placeholder={f.placeholder}
                        />
                    </div>
                ))}
                <div className="form__button">
                    <Button
                        disabled={!canSend || loading}
                        className={buttonClassName}
                        onClick={handleSubmit}
                        label={loading ? 'Please wait' : 'Send'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Form;
