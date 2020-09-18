import Styled from 'styled-components';


export const ImageWrapper = Styled.div`
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;
    &:hover > div{
        opacity: 1
    }
`
export const ImageBox = Styled.img`
    width: 100%
`
export const Overlay = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235, 84, 36, 0.5);
    font-size: 15px;
    opacity: 0
`
