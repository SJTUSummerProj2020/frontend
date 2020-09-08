import React from 'react';
import { Row, Col, BackTop, message } from 'antd';
import { Header } from '../components/Header';
import '../css/header.css';
import { AuctionList } from '../components/AuctionList';
import { Recommendation } from '../components/Recommendation';
import { getAllAuctions } from '../services/goodsService';
import { checkSession, logout } from '../services/userService';

export class AuctionListView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      auctionList: [],
      currentPage: 1,
      pageSize: 10,
      totalSize: 0,
      haveLoaded: [],
      loggedIn: false,
      user: null
    };
  }

  componentDidMount () {
    this.init();
    const callback = (data) => {
      if (data.status === 0) {
        this.setState(
          {
            loggedIn: true,
            user: data.data
          }
        );
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

  init = () => {
    const callback = (data) => {
      if (data.data.auctions.length === 0) {
        this.setState(
          {
            totalSize: data.data.auctions.length,
            auctionList: [],
            currentPage: 1,
            haveLoaded: 0
          }
          );
      } else {
        console.log('data', data);
        const tmp = [data.data.auctions.length];
        const dataLength = data.data.auctions.length;
        const totalPage = (dataLength % this.state.pageSize === 0) ? dataLength / this.state.pageSize : dataLength / this.state.pageSize + 1;
        const loaded = [];
        for (let i = 0; i < totalPage; ++i) {
          loaded.push(i + 1);
        }
        for (let i = 0; i < dataLength; ++i) {
          tmp[i] = data.data.auctions[i];
        }
        for (let i = 100; i < data.data.auctions.length; ++i) {
          tmp[i] = null;
        }
        this.setState(
          {
            totalSize: data.data.auctions.length,
            auctionList: tmp,
            currentPage: 1,
            haveLoaded: loaded
          },
            () => {
              console.log('Get type', this.state.auctionList);
            }
          );
      }
    };
    getAllAuctions('', callback);
  }

  changePage = (page) => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'auto'
    });
    if (this.state.haveLoaded.indexOf(page) < 0) {
      const callback = (data) => {
        const tmp = this.state.auctionList;
        const loaded = this.state.haveLoaded;
        const { length } = data.data.auctions;
        for (let i = 0; i < length; ++i) {
          tmp[(page - 1) * 10 + i] = data.data.auctions[i];
        }
        loaded.push(page);
        this.setState(
          {
            auctionList: tmp,
            currentPage: page,
            haveLoaded: loaded
          },
            () => {
              console.log('Change page', this.state.auctionList);
            }
          );
      };
      getAllAuctions('', callback);
    } else {
      this.setState(
          { currentPage: page }
        );
    }
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
            <Col span={15} push={1}>
              <AuctionList
                auctionList={this.state.auctionList}
                currentPage={this.state.currentPage}
                pageSize={this.state.pageSize}
                totalSize={this.state.totalSize}
                changePage={this.changePage}
                loggedIn={this.state.loggedIn}
                user={this.state.user}
              />
            </Col>
            <Col span={8} push={1}>
              <Recommendation
                loggedIn={this.state.loggedIn}
                user={this.state.user}
              />
            </Col>
          </Row>
          <BackTop />
        </div>
    );
  }
}
