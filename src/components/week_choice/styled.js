import styled from "styled-components";

export const WeekWrapper = styled.div`
    width:100%;
    padding:0 .4rem;
    background:#fff;
    .weekItem{
        padding-top:.6rem;
        h3{
            font-size:.4rem;
        }
        .weekDate{
            color:#ff3939;
            font-size:.24rem;
            margin-top:10px;
        }
        .weekGood{
            padding:.4rem 0;
            border-bottom:1px solid #e0e0e0;

        }
        .weekGoodImg{
            width:6.7rem;
            height:4.4rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .weekGoodName{
            color:#2c3038;
            font-size:.32rem;
            margin-top:.3rem;
        }
        .weekGoodDes{
            margin-top: 16px;
            font-size: .22rem;
            color: #92969c;
        }
    }
`