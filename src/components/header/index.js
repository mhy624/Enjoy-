import React, { Component } from 'react'
import {HeaderWrapper} from "./styled"
import logo from "@static/logo.png"
import {withRouter} from "react-router-dom"
class Header extends Component {
    render() {
        let {title} = this.props;
        return (
            <HeaderWrapper >
                <div className="header_l" onClick={this.handleTo.bind(this)}>{title}</div>
                <div className="header_c">
                    <img src={logo}/>
                </div>
                <div className="header_r">
                    <div>登陆</div>
                    <div>
                        <i className="iconfont">&#xe62a;</i>
                    </div>
                </div>
            </HeaderWrapper>
        )
    }
    handleTo(){
       this.props.history.push("/goodsTypes")
    }
}

Header.defaultProps = {
    title:'分类'
}

export default withRouter(Header);
