import styled from "styled-components";

export const GoodsWrapper = styled.div`
    &>div{
        padding:.3rem;
        display:flex;
        justify-content:space-between;
    }
    .goodsImg{
        width:3.45rem;
        height:2.3rem;
        flex-shrink:0;
        margin-right:.2rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .goodsDes{
        width:3.2rem;
        font-size:.26rem;
        &>p{
            height:1.2rem;
            margin-bottom:.2rem;
        }
        .goodsPrice{
            display:flex;
            p:nth-child(1){
                font-size: .3rem;
                color: #ff3939;
            }
            p:nth-child(2){
                margin-left: 12px;
                text-decoration: line-through;
                color: #92969c;
                font-size:.3rem;
            }
        }
    }
`