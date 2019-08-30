import React, { Component } from 'react'
import { WeekWrapper } from "./styled";
import { setState } from 'expect/build/jestMatchersObject';
import { week_choice } from "@api/week"
import BScrollComponent from "@common/bscroll";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect";
 class WeekChoice extends Component {
    constructor(){
        super()
        this.state = {
            weekGoods: [],
            page:0
        }
    }
    render() {
       
        let { weekGoods } = this.state;
        return (
            <BScrollComponent ref="bscroll">
                <WeekWrapper>
                    {
                        weekGoods.map((item, index) => (
                            <div className="weekItem" key={index}>
                                <h3>{item.group_section.title}</h3>
                                <div className="weekDate">{item.group_section.desc}</div>
                                <div className="tabs">
                                    {
                                        item.tabs.map((child, idx) => (
                                            <div className="weekGood" key={idx}>
                                                <div className="weekGoodImg">
                                                    <img src={child.url} alt="" />
                                                </div>
                                                <div className="weekGoodName">
                                                    {child.title}
                                                </div>
                                                <div className="weekGoodDes">{child.desc}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }

                </WeekWrapper>
            </BScrollComponent>
        )
    }
    componentWillUpdate(newProps,newState){
        if(newState.weekGoods !=this.state.weekGoods){
            this.refs.bscroll.handleRestpullingUp();
            this.refs.bscroll.handlefinishPullDown();
        }
        
    }
    componentDidMount() {
       

        if(sessionStorage.getItem("weekGoods")){
            this.setState({
                weekGoods:JSON.parse(sessionStorage.getItem("weekGoods"))
            })
        }else{
            let {page} = this.state;
            let {cityId} = this.props;
            this.handleWeekGetData(cityId,page);
        }
      

        this.refs.bscroll.handlepullingUp(()=>{
            let {cityId} = this.props;
            let {page} = this.state;
            this.handleWeekGetData(cityId,page);
        })

        //下拉刷新
        this.refs.bscroll.handlepullingDown(()=>{
            var arr = [104,140,144,216,260,299];
            var index = parseInt(Math.random()*7);
            this.props.handleUpdateCity(arr[index]);
            this.handleWeekGetData(arr[index],0,"update");
        })
    }
    async handleWeekGetData(cityId,page,type){
       
        var data = await week_choice(cityId,page);
        if(data && type){
            this.setState({
                weekGoods: [...data],
                page:++page
            })
        }else{
            this.setState({
                weekGoods: [...this.state.weekGoods,...data],
                page:++page
            })
        }


        sessionStorage.setItem("weekGoods",JSON.stringify(this.state.weekGoods))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WeekChoice)
