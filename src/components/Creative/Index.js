import React from 'react';
import {
  CreativeSection,
  CreativeInfo,
  CreativeTitle,
  CreativeTitleSpan,
  InfoDir,
  InfoDesc,
} from './style.js';

export default function Creative () {
  return (
    <CreativeSection>
      <div className="container">
        <CreativeInfo>
          <CreativeTitle>
            <CreativeTitleSpan>This is</CreativeTitleSpan> Me
          </CreativeTitle>
          <InfoDir>Software Engineer</InfoDir>
          <InfoDesc>
            I'm looking forward to being innovation and creative, and my objective is to apply the knowledge acquired through
            {' '}
            my studies in computer science, my practical skills and experience through various student organizations with experience
            {' '}
            in my field SWE.

          </InfoDesc>
        </CreativeInfo>
      </div>
    </CreativeSection>
  );
}
