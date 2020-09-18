import React, {Component} from 'react';
import axios from 'axios';
import {ImageWrapper, ImageBox, Overlay} from './style.js';
import { Link } from "react-router-dom";
import SelectProject from './SelectProject';

export default class Projects extends Component {
  state = {
    projects: [],
    selectedProjects: [],
    initialShow: true,
    style: [
      'page-item active',
      'page-item',
      'page-item',
      'page-item',
      'page-item',
      'page-item',
      'page-item',
    ],
  };

  componentDidMount () {
    axios
      .get ('js/data.json')
      .then (res => this.setState ({projects: res.data.projects}));
  }
  selectTypeOfProjects = e => {
    const type = e.target.value;
    let selectTypeOfProjects;
    let ID = type === 'All'
      ? 0
      : type === 'MERN'
          ? 1
          : type === 'Node'
              ? 2
              : type === 'React'
                  ? 3
                  : type === 'Angular' ? 4 : type === 'Desktop' ? 5 : 6;
    if (ID === 0) {
      selectTypeOfProjects = this.state.projects;
    } else {
      selectTypeOfProjects = this.state.projects.filter (
        item => item.type === type
      );
    }
    this.setState (
      {
        selectedProjects: selectTypeOfProjects,
        initialShow: false,
        style: [
          'page-item',
          'page-item',
          'page-item',
          'page-item',
          'page-item',
          'page-item',
          'page-item',
        ],
      },
      () => {
        const dataStyle = this.state.style;
        dataStyle[ID] = 'page-item active';
        console.log (dataStyle);
        this.setState (
          {
            style: dataStyle,
          },
          () => console.log (this.state.style)
        );
      }
    );
  };

  showProject = (item)=>{
    return(
      <SelectProject item={item}/>
    );
  }

  render () {
    const btnDesign = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'block',
      padding: '10px 20px',
      cursor: 'pointer',
      border: '2px solid #eb5424',
    };

    const projectsListBySelected = this.state.selectedProjects.map (item => {
      return (
        <ImageWrapper key={item.id}>
          <ImageBox src={item.image} alt={item.name} />
          <Overlay>
            <button className="btn btn-primary" onClick={this.showProject(item)} style={btnDesign}>
              Show Project
              
            </button>
          </Overlay>
        </ImageWrapper>
      );
    });

    const projectsListInitialiated = this.state.projects.map (item => {
      return (
        <ImageWrapper key={item.id}>
          <ImageBox src={item.image} alt={item.name} />
          <Overlay>
            <Link to={`/projects/${item.id}`} onClick={()=>this.showProject(item)} className="btn btn-primary" style={btnDesign}>
              Show Project
              
              
            </Link>
          </Overlay>
        </ImageWrapper>
      );
    });
    return (
      <div className="container-fluid">
        <div
          className="jumbotron jumbotron-fluid"
          style={{overflow: 'hidden', background: '#fff'}}
        >
          <div className="container">
            <h1 className="display-5 d-flex justify-content-center">
              My Projects
            </h1>
            <div className="lead d-flex justify-content-center">
              <nav>
                <ul className="pagination pagination-lg m-4">
                  <li
                    className={this.state.style[0]}
                    onClick={this.selectTypeOfProjects}
                  >
                    <button className="page-link" value="All">
                      All
                    </button>
                  </li>
                  <li
                    className={this.state.style[1]}
                    onClick={this.selectTypeOfProjects}
                  >
                    <button className="page-link" value="MERN">
                      MERN Stack
                    </button>
                  </li>
                  <li
                    className={this.state.style[2]}
                    onClick={this.selectTypeOfProjects}
                  >
                    <button className="page-link" value="Node">
                      Node JS
                    </button>
                  </li>
                  <li
                    className={this.state.style[3]}
                    onClick={this.selectTypeOfProjects}
                  >
                    <button className="page-link" value="React">
                      React JS
                    </button>
                  </li>
                  <li
                    className={this.state.style[4]}
                    onClick={this.selectTypeOfProjects}
                  >
                    <button className="page-link" value="Angular">
                      Angular JS
                    </button>
                  </li>
                  <li
                    className={this.state.style[5]}
                    onClick={this.selectTypeOfProjects}
                  >
                    <button className="page-link" value="Desktop">
                      Desktop
                    </button>
                  </li>
                  <li
                    className={this.state.style[6]}
                    onClick={this.selectTypeOfProjects}
                  >
                    <button className="page-link" value="Different">
                      Different Projects
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

          </div>

          <div>
            {this.state.initialShow
              ? projectsListInitialiated
              : projectsListBySelected}
          </div>
        </div>

        
      </div>
    );
  }
}
