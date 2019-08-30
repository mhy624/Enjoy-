import styled from "styled-components";


export const PageContainer = styled.div`
    background:#f6f6f6;
    h2{
        padding:.18rem .4rem;
        color: #1b1b20;
        font-size:.3rem;
        font-weight:100
    }
    ul{
        background:#ffff;
        display:flex;
        flex-wrap:wrap;
        li{
            width:2.5rem;
            height:.97rem;
            border-right:1px solid #ccc;
            border-bottom:1px solid #ccc;
            text-align:center;
            line-height:.97rem;
        }
    }
`