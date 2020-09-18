import Styled from 'styled-components';

export const CreativeSection = Styled.div`
    height: 500px;
    background: url('../images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed
`
export const CreativeInfo = Styled.div`
    padding-top: 100px;
    width: 50%;
    float: right;
`

export const CreativeTitle = Styled.h2`
    font-weight: bold;
    font-size: 50px
`
export const CreativeTitleSpan = Styled.span`
    font-weight: normal
`
export const InfoDir = Styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px
`
export const InfoDesc = Styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`