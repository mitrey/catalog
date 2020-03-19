import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Question from '../../components/Question';
import Search from '../../components/Search';
import Form from '../../components/Form';
import { database } from '../../firebase';
import Loader from '../../components/Loader';
import useAuth from '../../auth/useAuth';
import Title from '../../components/Title';
import { ReactComponent as BackIcon } from '../../icons/back.svg';
import './CountryInfo.css';
import { Link } from 'react-router-dom';
import Flag from 'react-world-flags';
import BaseTemplate from '../../templates/BaseTemplate';
import EmergencyInfoBlock from '../../components/EmergencyInfoBlock/EmergencyInfoBlock';

const prepareQuestions = res => {
    return Object.keys(res).map(id => {
        return { ...res[id], id };
    });
};

const CountryInfo = ({ isLoading, country, location, match: { params } }) => {
    const { user } = useAuth();
    const [openedQuestionId, setOpenedQuestionId] = useState(null);
    const [loading, setLoading] = useState(false);
    const id = params.countryId;
    const [questions, setQuestions] = useState([]);
    const [query, setQuery] = useState('');
    const { isLoggedIn } = useAuth();

    const filteredQuestion = query
        ? questions.filter(
              q =>
                  q.title &&
                  q.title.toLowerCase().indexOf(query.toLowerCase()) > -1
          )
        : questions;

    const handleQuestionSend = data => {
        setLoading(true);
        database
            .ref(`/countries/${id}/questions`)
            .push({ ...data, author: user, date: Date.now() })
            .then(() => {
                setLoading(false);
            })
            .catch(e => setLoading(false));
    };
    const handleAnswerSend = (questionId, answerText) => {
        setLoading(true);
        database
            .ref(`/countries/${id}/questions/${questionId}/answers`)
            .push({ text: answerText, author: user, date: Date.now() })
            .then(() => setLoading(false))
            .catch(e => setLoading(false));
    };

    useEffect(() => {
        database.ref(`/countries/${id}/questions`).on('value', snapshot => {
            const val = snapshot.val();
            if (val) {
                setQuestions(prepareQuestions(snapshot.val()));
            }
        });
    }, [id]);

    if (!country) return <div>Error. No such country</div>;

    return (
        <BaseTemplate
            header={
                <div className="country__tools">
                    <div className="country__tools-content">
                        <div className="country__back">
                            {location.pathname !== '/' && (
                                <Link to="/">
                                    <span className="back-icon">
                                        <BackIcon />
                                    </span>
                                    Back to countries list
                                </Link>
                            )}
                        </div>
                        <div className="country__name">
                            {country.countryCode && (
                                <Flag
                                    code={country.countryCode}
                                    height={24}
                                    className="country__name-flag"
                                />
                            )}
                            <Title text={country.name} color="#56bdd2" />
                        </div>
                        <Search
                            query={query}
                            onSearch={query => setQuery(query)}
                        />
                    </div>
                </div>
            }
            toolsLine={
                isLoggedIn && (
                    <div className="country__add-question">
                        <Form
                            loading={loading}
                            title="Add your question:"
                            fields={[
                                {
                                    name: 'title',
                                    placeholder: 'Title',
                                },
                                {
                                    name: 'text',
                                    placeholder: 'Question',
                                },
                            ]}
                            onSubmit={handleQuestionSend}
                        />
                    </div>
                )
            }
            content={
                isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="country__questions">
                            <div className="country__info">
                                <EmergencyInfoBlock {...country.emergency} />
                            </div>

                            <h3 className="country__list-title">
                                Questions List
                            </h3>
                            {filteredQuestion.length ? (
                                filteredQuestion.map((q, idx) => (
                                    <Question
                                        isOpened={q.id === openedQuestionId}
                                        onClick={() =>
                                            setOpenedQuestionId(q.id)
                                        }
                                        loading={loading}
                                        even={idx % 2 !== 0}
                                        key={q.id}
                                        {...q}
                                        onAnswerAdd={v =>
                                            handleAnswerSend(q.id, v)
                                        }
                                    />
                                ))
                            ) : (
                                <div className="country__empty">
                                    No questions to display.
                                </div>
                            )}
                        </div>
                    </>
                )
            }
        />
    );
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.countryId;
    return {
        isLoading: state.isLoading,
        country: state.countries[id],
    };
};

export default connect(mapStateToProps)(CountryInfo);
