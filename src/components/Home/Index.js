import React from 'react';
import { HomeSection, HomeInformation, HomeTitle, HomeInfoText, HomeDesc, HomeSpan } from './style.js';

export default function Home() {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Youssef Rashad</HomeTitle>
                    <HomeInfoText>Software Engineer</HomeInfoText>
                    <HomeInfoText>MERN Stack Developer</HomeInfoText>
                    <HomeDesc>
                        {/* Iam a professional <HomeSpan>Software Enginner</HomeSpan>
                        and Front-End Developer creating modern and resposive designs to Web and Mobile. 
                        Let us work together. Thank you. */}
                        I'm a professional <HomeSpan>Software Enginner </HomeSpan>
                        and <HomeSpan>MERN Stack Developer</HomeSpan>.
                        <br></br>
                        I'm looking forward to being innovation and creative, 
                        and my objective is to apply the knowledge acquired through 
                        my studies in computer science, my practical skills and experience through various 
                        student organizations with experience 
                        in my field SWE.

                    </HomeDesc>
                    <button className="btn btn-primary btn-lg">Let's Begin</button>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}
