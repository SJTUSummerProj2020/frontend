/* eslint-disable react/prop-types */
import React from 'react';
import { List } from 'antd';
import { CalendarOutlined, HomeOutlined } from '@ant-design/icons';
import { getRecommendGoods } from '../services/userService';
import '../css/recommendationlist.css';
import { Link } from 'react-router-dom';

export class RecommendationList extends React.Component {
  constructor (props) {
    super(props);
    this.state = { goodsList: [] };
  }

  componentDidMount () {
    const callback = (data) => {
      this.setState(
        {
          goodsList: data.data.goods
        }
      );
    };
    if (this.props.loggedIn) {
      getRecommendGoods(10, callback);
    } else {
      getRecommendGoods(10, callback);
    }
  }

  componentWillReceiveProps (nextProps, nextContext) {
    const { loggedIn } = nextProps;
    const callback = (data) => {
      this.setState(
        {
          goodsList: data.data.goods
        }
      );
    };
    if (loggedIn) {
      getRecommendGoods(10, callback);
    } else {
      getRecommendGoods(10, callback);
    }
  }

  render () {
    return (
      <List
        itemLayout="vertical"
        size="small"
        dataSource={this.state.goodsList}
        renderItem={(item) => (
          <List.Item>
            <Link
              to={{
                pathname: '/detail',
                search: '?id=' + item.goodsId }}
              target="_blank"
            >
              <div className="recommendation">
                <img
                  width={100}
                  className="recommendationImg"
                  alt="cover"
                  src={item.image}
                />
                <div className="recommendationDescription">
                  <div className="recommendationName">
                    <span>{item.name.length > 12 ? item.name.substr(0, 12) + '...' : item.name}</span>
                  </div>
                  <div className="recommendationPlace">
                    <HomeOutlined />
                    {item.address.length > 18 ? item.address.substr(0, 18) + '...' : item.address}
                  </div>
                  <div className="recommendationTime">
                    <CalendarOutlined />
                    <span>
                      {item.startTime}
                      {' '}
                                        -{item.endTime}
                    </span>
                  </div>
                  <div className="recommendationPrice">
                    {
                      item.goodsDetails.length === 0
                        ? (
                          <span className="canceled">演出取消</span>
                        )
                        : (
                          <span>
                                                    ￥{item.goodsDetails[0].price}
                                                    起
                          </span>
                        )
                    }
                  </div>
                </div>
              </div>
            </Link>
          </List.Item>
        )}
      />
    );
  }
}
