import React, {Component} from 'react';
import './style.css'
export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="profile_skills">
          <div className="container">
            <div className="profile">
              <h2 className="profile-title">
                <span>My </span>Profile
              </h2>
              <ul className="profile-list">
                <li className="profile-item">
                  <span>Name</span>Youssef Rashad
                </li>
                <li className="profile-item">
                  <span>Birthday</span>15/1/1999
                </li>
                <li className="profile-item">
                  <span>Address</span>Giza
                </li>
                <li className="profile-item">
                  <span>Phone</span>0112 672 8146
                </li>
                <li className="profile-item">
                  <span>Email</span>youssefrashad@gmail.com
                </li>
                <li className="profile-item">
                  <span>Website</span>
                  <span className="web">www.google.com</span>
                </li>
              </ul>
            </div>
            <div className="skills">
              <h2 className="skills-title">
                Some <span>skills</span>
              </h2>
              <p className="skills-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                praesentium blanditiis esse cupiditate, omnis similique.
              </p>
              
              <div className="mb-3">
                <span className="display-5">Javascript</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                </div>
              </div>
              
              <div className="mb-3">
              <span className="display-5">Node JS</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
              </div>

              <div className="mb-3">
              <span className="display-5">React JS</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
              </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
}
