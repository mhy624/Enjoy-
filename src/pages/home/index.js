import React, { Component } from 'react'
import Header from "@components/header"
import {Page} from "@common/commonStyled"
import WeekChoice from "@components/week_choice"
export default class Home extends Component {
    render() {
        return (
            <Page>
                <Header/>
                <WeekChoice/>
            </Page>
        )
    }
}
