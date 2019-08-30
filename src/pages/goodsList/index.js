import React, { Component, Fragment } from 'react'
import Header from "@components/header"
import { Page } from "@common/commonStyled"
import TopNav from "@components/topNav"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connect";
import { withRouter } from "react-router-dom";
import { GoodsWrapper } from "./styled"
class GoodsList extends Component {
    render() {
        let { list } = this.props;
        return (
            <Fragment>
                <Header />
                <Page>
                    <TopNav />
                    <GoodsWrapper>
                        {
                            list.map((item, index) => (
                                <div key={index}>
                                    <div className="goodsImg">
                                        <img src={item.product_image} />
                                    </div>
                                    <div className="goodsDes">
                                        <p>{item.name}</p>
                                        <div className="goodsPrice">
                                            <p>{item.price / 100}/位</p>
                                            <p>{item.original_price / 100}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </GoodsWrapper>
                </Page>
            </Fragment>
        )
    }
    componentDidMount() {
        let { cityId, id } = this.props.match.params;
        this.props.handleGetGoodsList(cityId, id);
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GoodsList))