/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'antd';
import "../css/recommendgoods.css";
const { Meta } = Card;


export class RecommendGoods extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // eslint-disable-next-line react/prop-types
        const {info} = this.props;
        return (
            <Card
                hoverable={true}
                className={"recommend-goods-recommend-cards"}
                cover={<img alt="image" src={info.image} className={"recommend-goods-goodsImg"}/>}
            >
                <Meta title={info.name} description={'¥' + info.price}/>
            </Card>
        );
    }
}
