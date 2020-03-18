import React, { useEffect, useState } from 'react';
import Question from '../../components/Question';
import Search from '../../components/Search';
import AddQuestionForm from '../../components/AddQuestionForm';
import { database } from '../../firebase';
import Loader from '../../components/Loader';
import useAuth from '../../auth/useAuth';
import Title from '../../components/Title';

import './CountryInfo.css';

const prepareQuestions = res => {
    return Object.keys(res).map(id => {
        return { ...res[id], id };
    });
};

const CountryInfo = ({ match: { params } }) => {
    const id = params.countryId;
    const [questions, setQuestions] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const { isLoggedIn } = useAuth();

    const filteredQuestion = query
        ? questions.filter(
              q =>
                  q.title &&
                  q.title.toLowerCase().indexOf(query.toLowerCase()) > -1
          )
        : questions;

    const handleQuestionSend = (title, text) => {
        database.ref(`/countries/${id}/questions`).push({ title, text });
    };

    useEffect(() => {
        database.ref(`/countries/${id}/questions`).on('value', snapshot => {
            setLoading(false);
            const val = snapshot.val();
            if (val) {
                setQuestions(prepareQuestions(snapshot.val()));
            }
        });
    }, [id]);

    return (
        <div>
            <div className="country__tools">
                <div className="country__tools-content">
                    <Title text={id} />
                    <Search query={query} onSearch={query => setQuery(query)} />
                    {isLoggedIn && (
                        <div>
                            <AddQuestionForm onSubmit={handleQuestionSend} />
                        </div>
                    )}
                </div>
            </div>

            {loading && <Loader />}
            <div className="country__questions">
                {filteredQuestion.map((q, idx) => (
                    <Question even={idx % 2 !== 0} key={q.id} {...q} />
                ))}
            </div>
        </div>
    );
};

export default CountryInfo;
