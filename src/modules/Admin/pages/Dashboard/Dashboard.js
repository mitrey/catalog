import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import AdminLayout from '../../layouts/AdminLayout';

const Dashboard = ({ children }) => (
    <AdminLayout
        sidebar={
            <Menu mode="horizontal">
                <Menu.Item key="1">
                    <Link to="/admin/users">Users</Link>
                </Menu.Item>

                <Menu.Item key="2">
                    <Link to="/admin/countries">Countries</Link>
                </Menu.Item>
            </Menu>
        }
        content={<div>Welcome to Admin panel</div>}
    />
);

export default Dashboard;
