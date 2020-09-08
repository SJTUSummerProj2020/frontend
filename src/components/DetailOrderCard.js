/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Card, Button} from 'antd';
import { Link } from 'react-router-dom';
import '../css/detailordercard.css';

export class DetailOrderCard extends React.Component {

  render () {
    if (this.props.info.surplus === 0) {
      return (
        <Card className="detail-order-card">
                  所选票档无货
        </Card>
      );
    }
    else if (this.props.surplus === -1) {
        return (
            <Card className="detail-order-card">
                请刷新查看库存
            </Card>
        );
    }
    return (
      <Card className="detail-order-card">
        <Row className="detail-order-stem">
                  您的订单已生成
        </Row>
        <Row className="detail-order-stem">
                  数量:
          {this.props.info.ticketsNum}
        </Row>
        <Row className="detail-order-stem">
                  合计:
          {this.props.info.totalPrice}
        </Row>
        <Row className="detail-order-stem">
                  演出名称:
          {this.props.info.goodsData.name}
        </Row>
        <Row className="detail-order-stem">
                  演出时间:
          {this.props.info.goodsDetailTime}
        </Row>
        <Row className="detail-order-stem">
                  演出地点:
          {this.props.info.goodsData.address}
        </Row>
        <Row>
          <Link to={{ pathname: '/orderList' }}>
            <Button className="detail-order-button">
                          点击查看订单号及所有订单
            </Button>
          </Link>
        </Row>
      </Card>
    );
  }
}
