import React from 'react';
import {
    CreativeSection,
    CreativeInfo,
    CreativeTitle,
    CreativeTitleSpan,
    InfoDir,
    InfoDesc,
} from './style.js';
import bg from '../../assets/images/creative/about-bg.jpg'

const Creative = () => {
    return (
        <CreativeSection image={bg}>
            <div className="container">
                <CreativeInfo>
                    <CreativeTitle>
                        <CreativeTitleSpan>This is</CreativeTitleSpan> Me
                    </CreativeTitle>
                    <InfoDir>Software Engineer</InfoDir>
                    <InfoDesc>
                        I'm a Software Engineer who is passionate about creating technology to elevate people and help new developers to find the right path. Some technologies I enjoy working with include Javascript, NodeJS, ReactJS, Express and MonogoDB. 
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </CreativeSection>
    );
}

export default Creative;
