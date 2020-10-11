import React from 'react'
import { SocialSection, SocialDiv, Icon, Paragraph, Span, Info2 } from './style.js';

import { dataSocial } from '../../data'

const index = () => {
    return (
        <div className="container-fluid">
            <SocialSection className="row">
                {
                    dataSocial.map((item)=>{
                        return(
                            <SocialDiv color={item.color} key={item.id} className="col-lg-4 col-12">
                                <a href={item.Link} target="_blank" rel="noopener noreferrer">
                                    <Icon className={item.icon}></Icon>
                                    <Paragraph>
                                        <Span>{item.title}</Span>
                                        <Info2>{item.body}</Info2>
                                    </Paragraph>
                                </a>
                            </SocialDiv>
                        );
                    })
                }
            </SocialSection>
        </div>
    );
}

export default index;
