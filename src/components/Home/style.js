import Styled from 'styled-components';

export const HomeSection = Styled.div`
    height: 500px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    @media (max-width:575px) {
        font-size: 30px;
    }
    @media (max-width:768px) {
        font-size: 20px;
    }
`

export const HomeInformation = Styled.div`
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width:575px) {
        transform: translate(-50%, -55%);
    }
`

export const HomeTitle = Styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    @media(max-width:768px){
        font-size: 40px;
        color: #fff
    }
    @media (max-width:575px) {
        font-size: 20px;
    }
`

export const HomeInfoText = Styled.h4`
    font-size: 30px;
    color: #eb5424;
    margin-bottom: 20px;
    @media(max-width:768px){
        font-size: 20px
    }
    @media (max-width:575px) {
        font-size: 18px;
    }
`

export const HomeDesc = Styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px;
    @media(max-width:768px){
        font-size: 15px;
    }
`

export const HomeSpan = Styled.span`
    color: #000
`