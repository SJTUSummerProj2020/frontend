import React from 'react';
import { Header } from '../components/Header';
import {EditInfo} from '../components/EditInfo';
import '../css/header.css';
import '../css/editInfo.css';
import { PersonalInfoSidebar } from '../components/PersonalInfo';
import { Col, message, Row } from 'antd';
import { checkSession, logout, getUserById} from '../services/userService';

import { history } from '../utils/history';

export class EditInfoView extends React.Component {
  constructor (props) {
    super(props);
    this.state = { key: '2', loggedIn: false, user: null, userInfo:null };
  }

  componentDidMount () {
    const callback = (data) => {
      if (data.status === 0) {
        this.setState(
          {
            loggedIn: true,
            user: data.data
          },
          () => {
            const callback_getUserById = (data2) => {
              this.setState(
                {
                  userInfo: data2.data
                },
                () => {console.log(data2.data);}
              );
            };
            getUserById(this.state.user.userId, callback_getUserById);
          }
        );
      } else {
        message.warning(data.msg);
        history.push('/login');
      }
    };
    checkSession(callback);
  }

  logout = () => {
    console.log('Logout');
    const callback = (data) => {
      sessionStorage.removeItem('user');
      this.setState(
        {
          loggedIn: false,
          user: null
        }
      );
      message.success(data.msg);
    };
    logout(callback);
  }

  render () {
    return (
      <div>
        <Header
          loggedIn={this.state.loggedIn}
          user={this.state.user}
          logout={this.logout}
        />
        <Row>
          <Col span={7} push={2}>
            <PersonalInfoSidebar myKey={this.state.key} />
          </Col>
          <Col span={12} push={4}>
            <EditInfo
              className={"editInfo"}
              userInfo={this.state.userInfo}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
