import React, { Component } from 'react';
import axios from 'axios';
import { SocialSection, SocialDiv, Icon, Paragraph, Span, Info2 } from './style.js';

export default class Social extends Component {
    state = {
        social:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then((res) => this.setState({ social: res.data.social}));
    }
    
    render() {
        console.log(this.socialList);
        const socialList = this.state.social.map((item) => {
            return (
                <SocialDiv color={item.color} key={item.id}>
                    <a href={item.Link} target="blank">
                        <Icon className={item.icon}></Icon>
                        <Paragraph>
                            <Span>{item.title}</Span>
                            <Info2>{item.body}</Info2>
                        </Paragraph>
                    </a>
                </SocialDiv>
            );
        });
        return (
            <SocialSection>
                {socialList}
            </SocialSection>
        )
    }
}
