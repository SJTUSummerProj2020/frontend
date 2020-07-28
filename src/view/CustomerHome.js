import React from 'react';
import {ImageCarousel} from "../components/Carousel";
import {Header} from "../components/Header";
import "../css/header.css";
import {ClassificationCard} from "../components/ClassificationCard";
import {BackTop, message} from "antd";
import {getPopularGoods} from "../services/goodsService";
import {checkSession} from "../services/userService";
import {logout} from "../services/userService";

export class CustomerHome extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            goodsListAll:[],
            goodsAll:null,
            goodsList0:[],
            goods0:null,
            goodsList1:[],
            goods1:null,
            goodsList2:[],
            goods2:null,
            goodsList3:[],
            goods3:null,
            goodsList4:[],
            goods4:null,
            goodsList5:[],
            goods5:null,
            goodsList6:[],
            goods6:null,
            loggedIn:false,
            user:null
        }
    }

    componentDidMount() {
        const checkSession_callback = (data) => {
            if(data.status === 0){
                this.setState(
                    {
                        loggedIn:true,
                        user:data.data
                    }
                )
            }
        }
        checkSession(checkSession_callback);
        const data = {number:7};
        const callback = (data) => {
            console.log(data.data);
            let goodsAll = data.data.itemAll[0];
            let goods0 = data.data.item0[0];
            let goods1 = data.data.item1[0];
            let goods2 = data.data.item2[0];
            let goods3 = data.data.item3[0];
            let goods4 = data.data.item4[0];
            let goods5 = data.data.item5[0];
            let goods6 = data.data.item6[0];
            let goodsListAll = [];
            let goodsList0 = [];
            let goodsList1 = [];
            let goodsList2 = [];
            let goodsList3 = [];
            let goodsList4 = [];
            let goodsList5 = [];
            let goodsList6 = [];
            for(let i = 1;i < 7;++i){
                goodsListAll[i-1] = data.data.itemAll[i];
                goodsList0[i-1] = data.data.item0[i];
                goodsList1[i-1] = data.data.item1[i];
                goodsList2[i-1] = data.data.item2[i];
                goodsList3[i-1] = data.data.item3[i];
                goodsList4[i-1] = data.data.item4[i];
                goodsList5[i-1] = data.data.item5[i];
                goodsList6[i-1] = data.data.item6[i];
            }
            this.setState(
                {
                    goodsAll:goodsAll,
                    goods0:goods0,
                    goods1:goods1,
                    goods2:goods2,
                    goods3:goods3,
                    goods4:goods4,
                    goods5:goods5,
                    goods6:goods6,
                    goodsListAll:goodsListAll,
                    goodsList0:goodsList0,
                    goodsList1:goodsList1,
                    goodsList2:goodsList2,
                    goodsList3:goodsList3,
                    goodsList4:goodsList4,
                    goodsList5:goodsList5,
                    goodsList6:goodsList6
                }
            )
        }
        getPopularGoods(data,callback);
    }

    logout = () => {
        console.log("Logout");
        const callback = (data) => {
            sessionStorage.removeItem("user");
            this.setState(
                {
                    loggedIn:false,
                    user:null
                }
            );
            message.success(data.msg);
        };
        logout(callback);
    }

    render() {
        return(
            <div>
                <Header
                    loggedIn={this.state.loggedIn}
                    user={this.state.user}
                    logout={this.logout}
                />
                <ImageCarousel
                    goodsList={this.state.goodsListAll}
                />
                <div className={"goodsList"}>
                    <ClassificationCard
                        classification={"热门演出"}
                        goods={this.state.goodsAll}
                        goodsList={this.state.goodsListAll}
                        currentType={-1}
                    />
                    <ClassificationCard
                        classification={"演唱会"}
                        goods={this.state.goods0}
                        goodsList={this.state.goodsList0}
                        currentType={0}
                    />
                    <ClassificationCard
                        classification={"话剧歌剧"}
                        goods={this.state.goods1}
                        goodsList={this.state.goodsList1}
                        currentType={1}
                    />
                    <ClassificationCard
                        classification={"儿童亲子"}
                        goods={this.state.goods2}
                        goodsList={this.state.goodsList2}
                        currentType={2}
                    />
                    <ClassificationCard
                        classification={"展览休闲"}
                        goods={this.state.goods3}
                        goodsList={this.state.goodsList3}
                        currentType={3}
                    />
                    <ClassificationCard
                        classification={"音乐会"}
                        goods={this.state.goods4}
                        goodsList={this.state.goodsList4}
                        currentType={4}
                    />
                    <ClassificationCard
                        classification={"曲苑杂坛"}
                        goods={this.state.goods5}
                        goodsList={this.state.goodsList5}
                        currentType={5}
                    />
                    <ClassificationCard
                        classification={"芭蕾舞蹈"}
                        goods={this.state.goods6}
                        goodsList={this.state.goodsList6}
                        currentType={6}
                    />
                </div>
                <BackTop/>
            </div>
        );
    }
}


