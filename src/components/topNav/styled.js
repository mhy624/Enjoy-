import styled from "styled-components"

export const TopNavWrapper = styled.div`
    width:100%;
    height:.79rem;
    background:#fff;
    border-bottom:1px solid #ccc;
    position:relative;
    ul{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        li:nth-child(1){
            border-right:1px solid #ccc;
        }
        li{
            width:100%;
            text-align:center;
        }
    }
    .toggleType{
        width:100%;
        position:absolute;
        top:.79rem;
        background:#fff;
        display:${props=>props.flag?'block':'none'}
        div{
            width:100%;
            line-height:.8rem;
            text-align:center;
            border-bottom:1px solid #ccc;
        }
    }
`