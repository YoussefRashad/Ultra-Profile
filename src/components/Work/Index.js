import React from 'react';
import { dataWork } from '../../data'

import { WorkSection, WorkTitle, SpanTitle, 
    Part, Icon, PartTitle, Line, PartDesc } from './style.js';

const Work = () => {
    const workList = dataWork.map((item) => {
        return (
            <Part key={item.id} className="col-lg-4 col-md-6 col-12">
                <Icon className={item.icon_name}></Icon>
                <PartTitle>{item.title}</PartTitle>
                <Line />
                <PartDesc>{item.body}</PartDesc>
            </Part>
        );
    })
    
    return (
        <WorkSection id="work">
            <div className="container">
                <WorkTitle><SpanTitle>My</SpanTitle> Work</WorkTitle>
                <div className="row">
                    {workList}
                </div>
            </div>
        </WorkSection>
    );
}

export default Work;
