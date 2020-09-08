import React from 'react';
import { Input} from 'antd';
import 'antd/dist/antd.min.css';
import { history } from '../utils/history';

const { Search } = Input;

export class SearchBar extends React.Component {
  searchChange = (value) => {
    if (value === '') {
      history.push('/');
    } else {
      const pathname = '/search?name=' + value;
      history.push(pathname);
    }
  };

  render () {
    return (
        <Search
          placeholder="搜索你感兴趣的演出"
          onSearch={this.searchChange}
        />
    );
  }
}
