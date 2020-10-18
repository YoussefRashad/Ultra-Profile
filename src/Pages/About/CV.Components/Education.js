import React from 'react'
import { certification } from '../data'

export default function Education() {
    return (
        <section className="part-cv">
          <div className="header-part">
            <div className="border-part"></div>
            <div className="name-part">EDUCATION</div>
          </div>
          <div className="body-part">
            <div className="div-2">
              <div className="div-point">
                <div className="row-point">
                  <div className="point"></div>
                  <div className="body-point">
                    <div className="head-point">UNIVERSITY</div>
                    <div className="cont-body" style={{ fontSize: '16px' }}>
                      Faculty of Computers & Artificial Intelligence, Software
                      Engineering Department in Helwan University.
                      <br />
                      Cummulative GPA: 3.74/4.0 with A+ appreciation.
                    </div>
                  </div>
                </div>
  
                <div className="row-point">
                  <div className="point"></div>
                  <div className="body-point">
                    <div className="head-point">HONARS & AWARDS</div>
                    <div className="cont-body">
                      <span style={{ fontSize: '16px' }}>
                        Third Rank - Third Level 2019-2020. <br />
                        Third Rank - Second Level 2018-2019.
                      </span>
                    </div>
                  </div>
                </div>
  
                <div className="row-point">
                  <div className="point"></div>
                  <div className="body-point">
                    <div className="head-point">ARMY</div>
                    <div className="cont-body" style={{ fontSize: '16px' }}>
                      The final exemption from the army.
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="div-2">
              <div className="div-row">
                <div className="div-head">
                  Certificate of Achievement <span className="arrow">►</span>
                </div>
                <div className="div-body textFont">
                  
                  {
                    certification.map((item, index)=>{
                      return(
                        <li key={index}>{item}</li>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
