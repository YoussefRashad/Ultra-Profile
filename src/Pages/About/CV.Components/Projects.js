import React from 'react'
import { projects } from '../data'
export default function Projects() {
    return (
        <section className="part-cv">
          <div className="header-part">
            <div className="border-part"></div>
            <div className="name-part">PROJECTS</div>
          </div>
  
          <div className="body-part">
  
            <div className="div-2">
              <div className="div-point">

                {
                  projects[0].leftSide.map((item, index)=>{
                    return(
                      <div className="row-point" key={index}>
                        <div className="point"></div>
                        <div className="body-point">
                          <div className="head-point">
                            {item.name} {" "}
                            <span className="cont-body">
                              <b className="light-Color"> Using ( {item.using} ). </b>
                            </span>
                            <a
                              href={item.liveServer}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="live-serverX"
                            >
                              Live Server
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }

              </div>
            </div>
  
            <div className="div-2">
              <div className="div-point">
                
              {
                projects[1].rightSide.map((item, index) => {
                  return (
                    <div className="row-point" key={index}>
                      <div className="point"></div>
                      <div className="body-point">
                        <div className="head-point">
                          {item.name} {" "}
                          <span className="cont-body">
                            <b className="light-Color"> Using {item.using}. </b>
                          </span>
                          <a
                            href={item.liveServer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-serverX"
                          >
                            Live Server
                            </a>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
              
              </div>
            </div>
          
          </div>
          
        </section>
      );
}
