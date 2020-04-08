import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;

const Dashboard = ({ content, sidebar }) => (
  <Layout>
    <Header>
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <Link to="/admin">Main</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/admin/users">Users</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/admin/countries">Countries</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider>
        {sidebar}
      </Sider>
      <Content>{content}</Content>
    </Layout>
  </Layout>
);

export default Dashboard;
