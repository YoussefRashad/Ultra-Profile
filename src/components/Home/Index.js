import React from 'react';
import {
    HomeSection, HomeInformation, HomeTitle, HomeInfoText,
    HomeDesc, HomeSpan
} from './style.js';
import bg from '../../assets/images/Home/home-bg.jpg'

const index = () => {
    return (
        <HomeSection image={bg}>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Youssef Rashad</HomeTitle>
                    <HomeInfoText>Software Engineer</HomeInfoText>
                    <HomeInfoText>MERN Stack Developer</HomeInfoText>
                    <HomeDesc>
                        I'm a <HomeSpan>Software Enginner </HomeSpan>and <HomeSpan>MERN Stack Developer</HomeSpan> who is passionate about creating technology to elevate people and help new developers to find the right path. Some technologies I enjoy working with include Javascript, NodeJS, ReactJS, Express and MonogoDB.
                    </HomeDesc>
                    <a href="#work" className=" btn btn-primary btn-lg">Let's Begin</a>
                </HomeInformation>
            </div>
        </HomeSection>
    );
}

export default index;
