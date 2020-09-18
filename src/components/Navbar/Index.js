import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
} from './style.js';

export default class Navbar extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            hover1: false,
            hover2: false,
            hover3: false,
            hover4: false,
            hover5: false,
            hover6: false,
        }
    }
    toggleHover1=()=>this.setState({hover1:!this.state.hover1});
    toggleHover2=()=>this.setState({hover2:!this.state.hover2});
    toggleHover3=()=>this.setState({hover3:!this.state.hover3});
    toggleHover4=()=>this.setState({hover4:!this.state.hover4});
    toggleHover5=()=>this.setState({hover5:!this.state.hover5});
    toggleHover6=()=>this.setState({hover6:!this.state.hover6});


    render () {
        let LinkStyle1;
        if(this.state.hover1){
            LinkStyle1 = {
                color:'#eb5424', 
                cursor:'pointer',               
                display: 'block',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold'
            } 
        }else{
            LinkStyle1 = {
                color:'#222',
                display: 'block',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold',
            }
        }
        let LinkStyle2;
        if(this.state.hover2){
            LinkStyle2 = {
                color:'#eb5424', 
                cursor:'pointer',               
                display: 'block',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold'
            } 
        }else{
            LinkStyle2 = {
                color:'#222',
                display: 'block',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold',
            }
        }
        let LinkStyle3;
        if(this.state.hover3){
            LinkStyle3 = {
                color:'#eb5424', 
                cursor:'pointer',               
                display: 'block',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold'
            } 
        }else{
            LinkStyle3 = {
                color:'#222',
                display: 'block',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold',
            }
        }
        
        let LinkStyle4;
        if(this.state.hover4){
            LinkStyle4 = {
                color:'#eb5424', 
                cursor:'pointer',               
                display: 'block',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold'
            } 
        }else{
            LinkStyle4 = {
                color:'#222',
                display: 'block',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold',
            }
        }
        
        let LinkStyle5;
        if(this.state.hover5){
            LinkStyle5 = {
                color:'#eb5424', 
                cursor:'pointer',               
                display: 'block',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold'
            } 
        }else{
            LinkStyle5 = {
                color:'#222',
                display: 'block',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold',
            }
        }
        
        let LinkStyle6;
        if(this.state.hover6){
            LinkStyle6 = {
                color:'#eb5424', 
                cursor:'pointer',               
                display: 'block',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold'
            } 
        }else{
            LinkStyle6 = {
                color:'#222',
                display: 'block',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold',
            }
        }
        return (
        <div>
            <NavbarSection>
            <div className="container">

                <Logo>
                <LogoText>Ultra Profile</LogoText>
                </Logo>

                <UlList>
                <ListItem className="list-item">
                    <Link to="/" style={LinkStyle1} 
                        onMouseEnter={this.toggleHover1}
                        onMouseLeave={this.toggleHover1}
                    >Home</Link>
                </ListItem>
                <ListItem className="list-item">
                    <Link to="/work"style={LinkStyle2} 
                        onMouseEnter={this.toggleHover2}
                        onMouseLeave={this.toggleHover2}>Work</Link>
                </ListItem>
                <ListItem className="list-item">
                    <Link to="/projects"style={LinkStyle3} 
                        onMouseEnter={this.toggleHover3}
                        onMouseLeave={this.toggleHover3}>Projects</Link>
                </ListItem>
                <ListItem className="list-item">
                    <Link style={LinkStyle4} to="/achievement" 
                        onMouseEnter={this.toggleHover4}
                        onMouseLeave={this.toggleHover4}
                    >Achievement</Link>
                </ListItem>
                <ListItem className="list-item">
                    <Link to="/about"style={LinkStyle5} 
                        onMouseEnter={this.toggleHover5}
                        onMouseLeave={this.toggleHover5}>About</Link>
                </ListItem>
                <ListItem className="list-item">
                    <Link style={LinkStyle6} to="/contact"
                        onMouseEnter={this.toggleHover6}
                        onMouseLeave={this.toggleHover6}
                    >Contact</Link>
                </ListItem>
                </UlList>
            </div>
            </NavbarSection>
        </div>
        );
    }
}
