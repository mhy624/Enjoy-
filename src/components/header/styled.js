import styled from "styled-components"

export const HeaderWrapper = styled.div`
    width:100%;
    height:.88rem;
    background:#000;
    position:fixed;
    left:0;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    .header_l{
        position:absolute;
        left:.2rem;
        color:#fff;
        font-size:.3rem;
    }
    .header_r{
        position:absolute;
        right:.2rem;
        color:#fff;
        font-size:.3rem;
        display:flex;
        justify-content:space-between;
        i{
            font-size:.4rem;
            font-weight:900;
            margin-left:.3rem;
        }
    }
`