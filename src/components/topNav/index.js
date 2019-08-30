import React, { Component } from 'react'
import {TopNavWrapper} from "./styled";
import { setState } from 'expect/build/jestMatchersObject';
import {topApi} from "@api/week"
import {mapStateToProps,mapDispatchToProps} from "./connect"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"; 
class TopNav extends Component {
    state = {
        type:"智能排序",
        flag:false,
        sort:[]
    }
    render() {
        let {type,flag,sort} = this.state;
        return (
            <TopNavWrapper flag={flag}>
                <ul>
                    <li>全部</li>
                    <li onClick={this.handleToggle}>{type}</li>
                </ul>
                <div className="toggleType" >
                    {
                        sort.map((item,index)=>(
                            <div key={index} onClick={this.props.handleToggleTypes.bind(this,item)}>{item.sort_name}</div>
                        ))
                    }
                </div>
            </TopNavWrapper>
        )
    }
    handleToggle = ()=>{
        this.setState({
            flag:!this.state.flag
        })
    }
    async componentDidMount(){
        let data = await topApi();
        console.log(data.sort);
        this.setState({
            sort:data.sort
        })
    }
    
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TopNav))
