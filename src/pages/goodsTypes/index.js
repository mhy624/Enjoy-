import React, { Component, Fragment } from 'react'
import Header from "@components/header"
import { connect } from "react-redux"
import { Page } from "@common/commonStyled"
import { PageContainer } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import {withRouter} from "react-router-dom";
class GoodsTypes extends Component {
    render() {
        let { goodsTypes } = this.props;

        return (
            <Fragment>
                <Header title="首页" />
                <Page>
                    <PageContainer>
                        {
                            goodsTypes.map((item, index) => (
                                <div key={index}>
                                    <h2>{item.name}</h2>
                                    <ul>
                                        {
                                            item.sub_category_list.map((child,idx)=>(
                                                <li key={idx}
                                                onClick={this.props.handleTo.bind(this,child.sub_category_list?child.sub_category_list[0].id:'')}
                                                >{child.name}</li>
                                            ))
                                        }
                                        
                                    </ul>
                                </div>
                            ))
                        }
                    </PageContainer>
                </Page>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.handleGetGoodsTypes();
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GoodsTypes))