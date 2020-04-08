import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Input, Collapse, Menu, Row, Col } from 'antd';
import AdminLayout from '../../layouts/AdminLayout';
import {
    deleteCountry,
    updateCountry,
    addCountry,
} from '../../../Home/redux/operations';

const Countries = ({ countries, addCountry, deleteCountry, updateCountry }) => {
    const [form] = Form.useForm();
    const [addCountryForm] = Form.useForm();

    const handleUpdateCountry = (id, values) => {
        const data = Object.keys(values)
            .filter(key => !!values[key])
            .reduce((acc, key) => {
                acc[key] = values[key];
                return acc;
            }, {});
        updateCountry(id, data);
    };

    return (
        <AdminLayout
            sidebar={
                <div>
                    <Menu>
                        <Menu.Item>hello</Menu.Item>
                    </Menu>
                </div>
            }
            content={
                <>
                    <Row>
                        <Col span={12} offset={6}>
                            <Form
                                layout="vertical"
                                form={addCountryForm}
                                name="control-hooks"
                                onFinish={addCountry}
                            >
                                <Form.Item
                                    label="Country Name"
                                    name="name"
                                    rules={[{ required: true }]}
                                >
                                    <Input placeholder="Country Name" />
                                </Form.Item>
                                <Form.Item
                                    label="Country Code"
                                    name="countryCode"
                                    rules={[{ required: true }]}
                                >
                                    <Input placeholder="Country Code" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Add Country
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Collapse>
                                {Object.keys(countries).map(id => (
                                    <Collapse.Panel
                                        key={id}
                                        header={countries[id].name}
                                    >
                                        <Form
                                            layout="vertical"
                                            form={form}
                                            name="control-hooks"
                                            onFinish={values =>
                                                handleUpdateCountry(id, values)
                                            }
                                            initialValues={countries[id]}
                                        >
                                            <Form.Item
                                                label="Embassy Phone"
                                                name="embassyPhone"
                                            >
                                                <Input placeholder="Embassy Number" />
                                            </Form.Item>
                                            <Form.Item
                                                label="Telegram Group"
                                                name="telegramGroup"
                                            >
                                                <Input placeholder="Telegram Group" />
                                            </Form.Item>
                                            <Form.Item
                                                wrapperCol={{
                                                    offset: 8,
                                                    span: 16,
                                                }}
                                            >
                                                <Button
                                                    htmlType="submit"
                                                    type="primary"
                                                >
                                                    Save
                                                </Button>
                                                <Button
                                                    htmlType="button"
                                                    onClick={() =>
                                                        deleteCountry(id)
                                                    }
                                                    danger
                                                >
                                                    Delete
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </Collapse.Panel>
                                ))}
                            </Collapse>
                        </Col>
                    </Row>
                </>
            }
        />
    );
};

export default connect(state => ({ countries: state.countries }), {
    deleteCountry,
    updateCountry,
    addCountry,
})(Countries);
