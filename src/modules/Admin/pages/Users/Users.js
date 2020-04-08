import React from 'react';
import { connect } from 'react-redux';

const Users = ({ countries }) => {
    return <div>countries</div>;
};

export default connect(state => ({ countries: state.countries }))(Users);
