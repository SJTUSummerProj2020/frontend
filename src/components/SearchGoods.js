/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'antd';
import '../css/goods.css';

const { Meta } = Card;

export class SearchGoods extends React.Component {

  render () {
    const { info } = this.props;
    return (
      <Card
        hoverable
        style={{ width: 180, marginLeft: 0 }}
        cover={<img alt="Goods cover" src={info.image} className="goodsImg" />}
      >
        <Meta
          title={info.name}
          description={
            info.goodsDetails.length === 0
              ? (
                <span className="canceled">演出取消</span>
              )
              : (
                <span>
                                  ￥{info.goodsDetails[0].price}
                                  起
                </span>
              )
          }
        />
      </Card>
    );
  }
}
