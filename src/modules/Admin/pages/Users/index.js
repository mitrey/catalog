import React from 'react';
import { connect } from 'react-redux';
import AdminLayout from '../../layouts/AdminLayout';

const Users = ({ countries }) => (
  <AdminLayout sidebar={<div>sidebar</div>} content={<div>users</div>} />
);

export default connect(state => ({ countries: state.countries }))(Users);
