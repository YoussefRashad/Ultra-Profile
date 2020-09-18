import React, {Component} from 'react';
import axios from 'axios';
import AllList from './AllList';
import HonorList from './HonorList';
import CertificationList from './CertificationList';

export default class Achievement extends Component {
  state = {
    Honors:[],
    Certifications:[],
    initialShow: [true,false,false],
    style: ['page-item active', 'page-item', 'page-item'],
  };

  componentDidMount () {
    axios
      .get ('js/data.json')
      .then (res => this.setState ({
        Honors:res.data.Achievement[0].honors,
        Certifications:res.data.Achievement[1].certifications,
      })
    )}; 


  selectTypeOfAchievement = e => {
    const type = e.target.value;
    
    let ID = type === 'All' ? 0 : type === 'Honor' ? 1 : 2;
    
    this.setState (
      {
        initialShow: [false,false,false],
        style: ['page-item', 'page-item', 'page-item'],
      },
      () => {
        const style = this.state.style;
        style[ID] = 'page-item active';
        
        const initialShow = this.state.initialShow;
        initialShow[ID]=true;

        this.setState (
          {
            initialShow,
            style
          },
          () => console.log (this.state.style, this.state.initialShow)
        );
      }
    );
  };

  render () {


    return (
      <div className="container">

        <div className="lead d-flex justify-content-center">
          <nav>
            <ul className="pagination pagination-lg m-4">
              <li
                className={this.state.style[0]}
                onClick={this.selectTypeOfAchievement}
              >
                <button className="page-link" value="All">
                  All
                </button>
              </li>
              <li
                className={this.state.style[1]}
                onClick={this.selectTypeOfAchievement}
              >
                <button className="page-link" value="Honor">
                  Honors
                </button>
              </li>
              <li
                className={this.state.style[2]}
                onClick={this.selectTypeOfAchievement}
              >
                <button className="page-link" value="Certification">
                  Certifications
                </button>
              </li>
            </ul>
          </nav>
        </div>
        

        <div>
            {this.state.initialShow[0]
              ? <AllList Honors={this.state.Honors} Certifications={this.state.Certifications}/>
              : this.state.initialShow[1]
              ? <HonorList Honors={this.state.Honors} /> 
              : <CertificationList Certifications={this.state.Certifications}/>}
        </div>

      </div>
    );
  }
}
