import Styled from 'styled-components';

export const CreativeSection = Styled.div`
    height: 500px;
    background: url(${ props => props.image });
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media (max-width:991px) {
        height: auto;
        width: 100%;
        padding-top: 10px;
        float: none;
        font-size: 30px
    }
`
export const CreativeInfo = Styled.div`
    padding-top: 100px;
    width: 50%;
    float: right;
    @media (max-width:575px) {
        padding-top: 10px;
    }
    @media (max-width:991px) {
        width: 100%;
        padding-top: 10px;
        float: none;
        font-size: 30px
    }
`

export const CreativeTitle = Styled.h2`
    font-weight: bold;
    font-size: 50px;
    @media (max-width:575px) {
        font-size: 30px;
    }
`
export const CreativeTitleSpan = Styled.span`
    font-weight: normal;
`
export const InfoDir = Styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    @media (max-width:575px) {
        font-size: 17px;
        margin-bottom: 10px;
    }
    @media (max-width:991px){
        font-size: 30px
    }
`
export const InfoDesc = Styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
    @media (max-width:575px) {
        margin-bottom: 0px;
        font-size: 15px;
    }
    @media (max-width:991px){
        font-size: 20px
    }
`

/*

@media (max-width:991px) {


    .creative .creative-info .info-dir {
        font-size: 30px
    }
}

*/