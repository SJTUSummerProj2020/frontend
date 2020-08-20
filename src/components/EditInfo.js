/* eslint-disable react/prop-types */
import React from 'react';
import {Form, Row, Col, Input, Button, message} from 'antd';
import {editUser} from '../services/userService';

export class EditInfo extends React.Component {
  constructor (props) {
    super(props);
    console.log("Props", this.props);
  }

  onFinish = (values) => {
    console.log(values);
    const data = {
      username: values.username,
      userId: this.props.userInfo.userId,
      userType: this.props.userInfo.userType,
      password: values.password,
      phone: values.phone,
      buy0: this.props.userInfo.buy0,
      buy1: this.props.userInfo.buy1,
      buy2: this.props.userInfo.buy2,
      buy3: this.props.userInfo.buy3
    };
    const callback = (data) => {
      if (data.status === 0) {
        message.success(data.msg);
      }
    };
    editUser(data, callback);
  }

  render() {
    if (this.props.userInfo === null) {
      return null;
    }
    const initialValues = {
      username: this.props.userInfo.username,
      userId: this.props.userInfo.userId,
      userType: this.props.userInfo.userType === 0 ? "管理员" : "普通用户",
      password: this.props.userInfo.password,
      phone: this.props.userInfo.phone
    };
    return (
      <Form
        layout="vertical"
        hideRequiredMark
        onFinish={this.onFinish}
        initialValues={initialValues}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="username"
              label="用户名"
            >
              <Input placeholder="用户名" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="userId"
              label="用户ID"
            >
              <Input placeholder="用户ID" disabled/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="userType"
              label="用户类型"
            >
              <Input placeholder="用户类型" disabled/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="password"
              label="登录密码"
            >
              <Input placeholder="登录密码"/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="phone"
              label="电话号码"
            >
              <Input placeholder="电话密码" type="phone"/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
