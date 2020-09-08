import React from 'react';
import { List, Avatar, Button, message } from 'antd';
import { UserOutlined, NumberOutlined, PhoneOutlined, LockOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { changeUserStatusByUserId } from '../services/userService';

export class UserList extends React.Component {

  changeUserStatus = (userId) => {
    const data = { userId: userId };
    const callback = (data) => {
      message.success(data.msg);
      this.props.changeUserStatus(userId);
    };
    changeUserStatusByUserId(data, callback);
  }

  render () {
    return (
        <List
          itemLayout="horizontal"
          dataSource={this.props.userList}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={[require('../assets/avatar.jpg')]} />}
                title={(
                  <div>
                    <UserOutlined />
                    {' '}
                                  用户名:
                    {' '}
                    {item.username}
                  </div>
                )}
                description={(
                  <div className="userListDescription">
                    <div className="userId">
                      <NumberOutlined />
                      {' '}
                                      用户ID:{item.userId}
                    </div>
                    <div className="nickname">
                      <UserOutlined />
                      {' '}
                                      用户昵称:{item.nickname}
                    </div>
                    <div className="phone">
                      <PhoneOutlined />
                      {' '}
                                      电话号码:{item.phone}
                    </div>
                    <div className="password">
                      <LockOutlined />
                      {' '}
                                      用户密码:{item.password}
                    </div>
                    <div className="userType">
                      <SafetyCertificateOutlined />
                                      用户类别:
                      {' '}
                      {
                        (() => {
                          switch (item.userType) {
                            case -1: return (<span>封禁用户</span>);
                            case 0: return (<span>管理员</span>);
                            case 1: return (<span>普通用户</span>);
                            default: break;
                          }
                        })()
                      }
                    </div>
                  </div>
                )}
              />
              <div className="userListButton" style={{ float: 'right' }}>
                {
                  item.userType < 0
                    ? (
                      <Button type = "primary"onClick={this.changeUserStatus.bind(this, item.userId)}>解禁</Button>
                    )
                    : (
                      item.userType === 0
                        ? (
                          <div />
                        )
                        : (
                          <Button onClick={this.changeUserStatus.bind(this, item.userId)}>封禁</Button>
                        )
                    )
                }
              </div>
            </List.Item>
          )}
        />
    );
  }
}
