import React from 'react';
import { skills } from '../data'
const Skills = () => {
    return (
        <section className="part-cv">
          <div className="header-part">
            <div className="border-part"></div>
            <div className="name-part">TECHNICAL SKILLS</div>
          </div>
          <div className="body-part">
            <div className="div-2">
              <div className="div-point">
  
              {
                skills[0].leftSide.map((item, index) => {
                  return (
                    <div className="row-point" key={index}>
                      <div className="point"></div>
                      <div className="body-point">
                        <div className="head-point">{item.title}: <span className="cont-body">
                          {item.tech}
                        </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
  
              </div>
            </div>
  
            <div className="div-2">
              <div className="div-point-2">
              
              {
                skills[1].rightSide.map((item, index) => {
                  return (
                    <div className="row-point" key={index}>
                      <div className="point"></div>
                      <div className="body-point">
                        <div className="head-point">{item.title}: <span className="cont-body">
                          {item.tech}
                        </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
  
                {/* <div className="row-point">
                  <div className="point"></div>
                  <div className="body-point">
                    <div className="head-point">Soft Skills: <span className="cont-body">Presentation skills,
                                              Leadership, Team work.</span></div>
  
                  </div>
                </div> */}

              </div>
  
            </div>
          </div>
        </section>
  
      );
}

export default Skills;
