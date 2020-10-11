import Styled from 'styled-components';

export const SocialSection = Styled.div`
    height: auto;
    overflow: hidden;
`
export const SocialDiv = Styled.div`
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${(props) => props.color};
`

export const Icon = Styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #000;
    float: left;
    margin-right: 10px
`
export const Paragraph = Styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    color: #fff
`
export const Span = Styled.span`
    display: block;
`
export const Info2 = Styled.span`
        font-weight: normal
`