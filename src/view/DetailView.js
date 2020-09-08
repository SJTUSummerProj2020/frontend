import React from 'react';
import { Row, Col, message, BackTop, Empty } from 'antd';
import { Header } from '../components/Header';
import { DetailCard } from '../components/DetailCard';
import { DetailShowTab } from '../components/DetailShowTab';
import { Recommendation } from '../components/Recommendation';
import { getGoodsByGoodsId } from '../services/goodsService';
import { checkSession, logout } from '../services/userService';

import '../css/detailview.css';

let goodsData = null;
const OrderData = { tmpId: null, userId: null };
export class DetailView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      goodsId: null,
      goodsData: null,
      loggedIn: false,
      user: null
    };
  }

  componentDidMount () {
    const query = this.props.location.search;
    const arr = query.split('?');
    OrderData.tmpId = arr[1].substr(3);
    this.setState({ goodsId: OrderData.tmpId });

    const callback = (data) => {
      console.log("DetailView data",data);
      if (data.status === -1) {
        message.warning(data.msg);
      }
      else {
        goodsData = data.data;
        this.setState({ goodsData: data.data });
      }
    };
    const requestData = { goodsId: OrderData.tmpId };
    getGoodsByGoodsId(requestData, callback);
    const checkSession_callback = (data) => {
      console.log(data);
      if (data.status === 0) {
        this.setState(
          {
            loggedIn: true,
            user: data.data
          }
        );
      }
    };
    checkSession(checkSession_callback);
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
    console.log('goodsID', this.state.goodsId);
    if (OrderData.tmpId === null) { return (<Empty className="empty"/>); }
    if (goodsData === null) { return (<Empty className="empty"/>); }
    return (
        <Row align="top" gutter={16}>
          <Header
            loggedIn={this.state.loggedIn}
            user={this.state.user}
            logout={this.logout}
          />
          <DetailCard
            info={OrderData}
            loggedIn={this.state.loggedIn}
            user={this.state.user}
          />

          <Row align="top" gutter={16} className="detail-view-recommend">
            <Col span={16}>
              <DetailShowTab info={goodsData} classname="detail-view-show-tab" />
            </Col>
            <Col className="recommend">
              <Recommendation
                loggedIn={this.state.loggedIn}
                user={this.state.user}
              />
            </Col>
          </Row>
          <BackTop />
        </Row>
    );
  }
}
