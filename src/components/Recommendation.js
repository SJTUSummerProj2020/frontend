import React from 'react';
import { Card } from 'antd';
import { RecommendationList } from './RecommendationList';

export class Recommendation extends React.Component {

  render () {
    return (
      <Card
        title={<span style={{ float: 'left' }}>您可能还喜欢</span>}
        bordered
        style={{ width: 350, marginLeft: 30 }}
      >
        <RecommendationList
          loggedIn={this.props.loggedIn}
          user={this.props.user}
        />
      </Card>

    );
  }
}
