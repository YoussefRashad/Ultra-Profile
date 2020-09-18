import React, { Component } from 'react';
import axios from 'axios';
import { WorkSection, WorkTitle, SpanTitle, Part, Icon, PartTitle, Line, PartDesc } from './style.js';

export default class Work extends Component {

    state ={
        works:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then((res) => this.setState({ works: res.data.works}));
    }
    render() {
        const {works} = this.state;
        const workList = works.map((item)=>{
            return(
                <Part key={item.id} pos={item.id}>
                    <Icon className={item.icon_name}></Icon>
                    <PartTitle>{item.title}</PartTitle>
                    <Line />
                    <PartDesc>{item.body}</PartDesc>
                </Part>
            );
        })
        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><SpanTitle>My</SpanTitle> Work</WorkTitle>
                    {workList}
                </div>
            </WorkSection>
        )
    }
}
