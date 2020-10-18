import React from 'react';

const CareerObjective = () => {
  const info = "I'm a Software Engineer who is passionate about creating technology to elevate people and help new developers to find the right path."
  const technologies = "Some technologies I enjoy working with include Javascript, NodeJS, ReactJS, Express and MonogoDB." 
    return (
        <section className="part-cv">
          <div className="header-part">
            <div className="border-part"></div>
            <div className="name-part">CAREER OBJECTIVE</div>
          </div>
          <div className="body-part">
            <div className="div-2">
              <div className="div-point">
                <div className="row-point">
                  <div className="point"></div>
                  <div className="body-point">
                    <div className="head-point">
                      {info}<br /> {technologies}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default CareerObjective;
