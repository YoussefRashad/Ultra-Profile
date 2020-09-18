import './style.css';

import React, {Component} from 'react';

export default class About extends Component {
  headerFunction = () => {
    return (
      <div>
        <header className="header">
          <div className="he-right">
            <div className="name">Youssef Farag Rashad</div>
            <div className="job">Software Engineer</div>
          </div>

          {/* <!-- Information about me --> */}

          <div className="body-point">
            <div className="head-point">
              <span className="icon-contact">✴</span>
              <span className="name-contact"><span>  </span>
                15 El Tohed ST, El Warraq, Giza, Egypt
              </span>
            </div>
            <b>
              <div className="cont-body">
                <span className="icon-contact">☎</span>
                <span className="name-contact">+20 112-672-8146 | </span>
                <span className="icon-contact">✉</span>
                <span className="name-contact">
                  youssefrashad119@gmail.com |{' '}
                </span>
                <span className="icon-contact">✉</span>
                <span className="name-contact">
                  youssefrashad19@yahoo.com |{' '}
                </span>
                <span className="icon-contact">L</span>
                <span className="name-contact">
                  <a
                    href="https://www.linkedin.com/in/youssef-rashad-92b597156/"
                    target="blank"
                    style={{color: 'black'}}
                  >
                    LinkedIn
                  </a>
                </span>
                <span className="name-contact"> | </span>
                <span className="icon-contact">G</span>
                <span className="name-contact">
                  <a
                    href="https://github.com/YoussefRashad"
                    target="blank"
                    style={{color: 'black'}}
                  >
                    GitHub
                  </a>
                </span>
              </div>

            </b>
          </div>
        </header>

      </div>
    );
  };

  educationFunction = () => {
    return (
      <div>
        <section className="part-cv">
          <div className="header-part">
            <div className="border-part" />
            <div className="name-part">EDUCATION</div>
          </div>
          <div className="body-part">
            <div className="div-2">
              <div className="div-point">
                <div className="row-point">
                  <div className="point" />
                  <div className="body-point">
                    <div className="head-point">UNIVERSITY</div>
                    <b>
                      <div className="cont-body">
                        Faculty of Computers & Artificial Intelligence, SWE Department in Helwan
                        University.<br />
                        Cummulative GPA: 3.74/4.0 with A+ appreciation.
                      </div>
                    </b>
                  </div>
                </div>
                <div className="row-point">
                  <div className="point" />
                  <div className="body-point">
                    <div className="head-point">Army</div>
                    <b>
                      <div className="cont-body">
                        The final exemption from the army.
                      </div>
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-2">
              <div className="div-row">
                <div className="div-head">
                  Certificate of achievement <span className="arrow">►</span>
                </div>
                <div className="div-body">

                  <b>
                    <li>
                      Successfully completed RESTful API with HTTP and JS on Coursera in 2020.
                    </li>
                    <li>
                      Successfully completed Build NodeJS applications with Mongodb on Udemy in 2020.
                    </li>
                    <li>
                      Successfully completed Getting started as a freelancer (Upwork) on ITI Platform in
                      2020.
                    </li>
                    <li>
                      Successfully completed Freelancing Basics on ITI
                      Platform in
                      2020.
                    </li>
                    <li>Third Rank - Second Level 18/19.</li>
                    <li>
                      Successfully completed Object Oriented Programming using Java on Udemy in 2018.
                    </li>
                    <li>
                      Successfully completed Linux with Ubuntu and CentOS on Udemy in 2018.
                    </li>
                    <li>
                      Successfully completed Ubuntu Linux on Udemy in 2018.
                    </li>
                    <li>
                      Excellent Achievement in Advanced C Language from SWE Program, Egypt in 2017.
                    </li>
                  </b>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  experienceFunction = () => {
    return (
      <section className="part-cv">
        <div className="header-part">
          <div className="border-part" />
          <div className="name-part">EXPERIENCE</div>
        </div>
        <div className="body-part">
          <div className="div-2">
            <div className="div-point">

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    IOT training from ITI, Aug 2019.{' '}
                  </div>
                  <div className="cont-body">
                    <b>
                      <li>I have passed IOT 2019 Mastery Award exam.</li>
                    </b>
                  </div>
                </div>
              </div>

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Artificial intelligence analyst training from IBM Acadamic,
                    Egypt Aug 2019
                  </div>
                  <div className="cont-body">
                    <b>
                      <li>I have passed AI Analyst 2019 Mastery Award exam.</li>
                    </b>
                  </div>
                </div>
              </div>

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Algorithms Summer Training from SWE Program in Helwan
                    University, Egypt Jan2019 - Mar2019.{' '}
                  </div>
                  <div className="cont-body">
                    <li>
                      Attended 3 months Competitive-Programming-based training held by ICPC Helwan
                      Student Chapter.
                    </li>
                    <li>
                      It included Couple of famous DS used in Competitive, Algorithms over Graphs, DP,
                      Bit
                      manipulation, Number Theory, Computational Geometry, and Search Techniques.
                    </li>
                  </div>
                </div>
              </div>

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Completing iCamp'18 training,Electro Mechanical track from iHup
                    in 2018.
                  </div>
                </div>
              </div>

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Small Programmer for ( Suzan Mobarak ) in Scientific Research
                    bulding, Egypt Nov2010 - Jan2011.
                  </div>
                  <div className="cont-body">
                    <li>
                      I had The 1st in the Participant in Jan2011 Project Title: World Zoo.
                    </li>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    );
  };

  projectsFunction = () => {
    return (
      <section className="part-cv">
        <div className="header-part">
          <div className="border-part" />
          <div className="name-part">PROJECTS</div>
        </div>
        <div className="body-part">
          <div className="div-2">
            <div className="div-point">

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">DWH Decisions Making Report</div>
                </div>
              </div>
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Cryptography and Network Security Project
                  </div>
                </div>
              </div>

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Restaurant Project<span className="cont-body">
                      <b className="light-Color">
                        {' '}Using ( HTML, CSS, HTML 5, CSS 3, JS, Bootstrap4,
                        Angular ), Collective work.
                      </b>
                    </span>
                  </div>
                  <b>
                    <div className="cont-body">
                      {/* <!--

                                        Any Description put here

                                     --> */}
                    </div>
                  </b>
                </div>
              </div>

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Library Management System
                    <span className="cont-body">
                      <b className="light-Color"> Desktop App using Java SE.</b>
                    </span>
                  </div>
                  <b>
                    <div className="cont-body">
                      <li>
                        I had The 1st from SWE Program in Academic Year 2018/2019.
                      </li>
                      {/* <!--

                                        Any Description put here

                                     --> */}
                    </div>
                  </b>
                </div>
              </div>
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Training Center System
                    <span className="cont-body">
                      <b className="light-Color"> Desktop App using Java SE.</b>
                    </span>
                  </div>
                  <b>
                    <div className="cont-body">
                      {/* <!--

                                        Any Description put here

                                     --> */}
                    </div>
                  </b>
                </div>
              </div>
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Fashion Store Management System
                    {' '}
                    <span className="cont-body">
                      <b className="light-Color"> Desktop App using Java.</b>
                    </span>
                  </div>
                  <b>
                    <div className="cont-body">
                      {/* <!--

                                        Any Description put here

                                     --> */}
                    </div>
                  </b>
                </div>
              </div>
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Train Ticket Reservation System
                    <span className="cont-body">
                      <b className="light-Color">
                        {' '}Desktop App using Java SE.{' '}
                      </b>
                    </span>
                  </div>
                  <b>
                    <div className="cont-body">
                      {/* <!--

                                        Any Description put here

                                     --> */}
                    </div>
                  </b>
                </div>
              </div>

              {/* <!--<div className="row-point">
                            <div className="point"></div>
                            <div className="body-point">
                                <div className="head-point">Control Manger (Desktop App using Java)</div>
                                <b>
                                <div className="cont-body">
                                    This project can be installed in any Faculty. It mainly contains important <br>modules
                                    like ( Admin management, Professor management, Teaching Assistant management, Employee management, Student management,  Course details management ).<br>
                                    Admin can create new course with all its details and  Update-Delete-List courses .<br>
                                    Student can book course and System Generate invoices and Student <br>Admin,Professor,TA,Employee,Student login/logout. <br> Admin Can Add-Update-Delete-List, User Types (Admin, Professor, TA, Employee, Student).
                                </div>
                                </b>
                            </div>
                        </div>--> */}

            </div>
          </div>
          <div className="div-2">
            <div className="div-point">

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Scheduling Algorithms Priority
                    <span className="cont-body">
                      <b className="light-Color"> Desktop App using Java SE.</b>
                    </span>
                  </div>
                  <b>
                    <div className="cont-body">
                      {/* <!--

                                        Any Description put here

                                     --> */}
                    </div>
                  </b>
                </div>
              </div>

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Chat Application<span className="cont-body">
                      <b className="light-Color">
                        Desktop App using Java SE.
                      </b>
                    </span>
                  </div>
                  <b>
                    <div className="cont-body">
                      {/* <!--

                                        Any Description put here

                                     --> */}
                    </div>
                  </b>
                </div>
              </div>

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Electricity Billing System
                    <span className="cont-body">
                      <b className="light-Color"> Desktop App using Java SE.</b>
                    </span>
                  </div>
                  <b>
                    <div className="cont-body">
                      <li>
                        I had The 1st from SWE Program in Academic Year 2017/2018.
                      </li>
                      {/* <!--

                                        Any Description put here

                                     --> */}
                    </div>
                  </b>
                </div>
              </div>

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Future-Tech<span className="cont-body">
                      <b className="light-Color">
                        {' '}Using
                        ( HTML, CSS, HTML 5, CSS 3, JS ), Collective work
                      </b>
                    </span>
                  </div>
                  <b>
                    <div className="cont-body">
                      <li>
                        I had The 1st from SWE Program in Academic Year 2017/2018.
                      </li>
                      {/* <!--

                                        Any Description put here

                                     --> */}
                    </div>
                  </b>
                </div>
              </div>

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Student's Affairs<span className="cont-body">
                      <b className="light-Color">
                        Console App using C.
                      </b>
                    </span>
                  </div>
                  <b>
                    <div className="cont-body">
                      <li>
                        I had The 1st from SWE Program in Academic Year 2017/2018.
                      </li>
                      {/* <!--

                                        Any Description put here

                                     --> */}
                    </div>
                  </b>
                </div>
              </div>

              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    Market<span className="cont-body">
                      <b className="light-Color">
                        {' '}Console
                        App using C.
                      </b>
                    </span>
                  </div>
                  <b>
                    <div className="cont-body">
                      <li>
                        I had The 1st from SWE Program in Academic Year 2017/2018.
                      </li>
                      {/* <!--

                                        Any Description put here

                                     --> */}
                    </div>
                  </b>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    );
  };

  skillsFunction = () => {
    return (
      <section className="part-cv">
        <div className="header-part">
          <div className="border-part" />
          <div className="name-part">SKILLS</div>
        </div>
        <div className="body-part" >
          <div className="div-2">
            <div className="div-point">
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                  <b>Programming</b>: <span className="cont-body" style={{fontSize: '15px'}}>
                      
                        Main (Java, C/C++,
                        Python, JS) & Very Good knowledge of many OOP concepts, Design
                        Patterns, Data Structures, Analysis and Design of Algorithms.
                      
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-point">
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                    <b>Web Development</b>: <span className="cont-body" style={{fontSize: '15px'}}>
                        Front End:(HTML,
                        CSS, Bootstrap4, Angular, AJAX, JSON), Back End:(NodeJS,
                        ExpressJS).
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-point">
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                  <b>Database</b>: <span className="cont-body" style={{fontSize: '15px'}}>
                      
                        SQL, PL/SQL,
                        MongoDB.
                      
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-point">
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                  <b>Data Structures and Algorithms</b>: <span className="cont-body" style={{fontSize: '15px'}}>
                      
                        Solved +300 programming problems on different online judges.
                      
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-point">
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                  <b>Frameworks</b>: <span className="cont-body" style={{fontSize: '15px'}}>
                      
                        Java Swing,
                        JavaFx.
                      
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-point">
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                  <b>Tools</b>: <span className="cont-body" style={{fontSize: '15px'}}>
                      
                        Git and GitHub, Code Blocks,
                        Netbeans, Visual Studio, VS Code, JetBrains PyCharm, Oracle Developement and
                        Power BI Desktop.
                      
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-point">
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                  <b>Others</b>:
                    {' '}
                    <span className="cont-body" style={{fontSize: '15px'}}>
                      Linux and Windows user.
                    </span>
                  </div>

                </div>
              </div>
            </div>
            <div className="div-point">
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">
                  <b>Soft Skills</b>: <span className="cont-body" style={{fontSize: '15px'}}>
                      
                        Presentation skills,
                        Leadership, Team work, and Ability to self-learn.
                      
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  };

  activiesFunction = () => {
    return (
      <section className="part-cv">
        <div className="header-part">
          <div className="border-part" />
          <div className="name-part">ACTIVITES</div>
        </div>

        <div className="body-part">
          <div className="div-2">
            <div className="div-point">
              <div className="row-point">
                <div className="point" />
                <div className="body-point">
                  <div className="head-point">Volunteer Work</div>
                  <div className="div-body">
                    <ul style={{fontSize: '16px', paddingLeft: '30px'}}>
                      <li >
                        Technical Vice President at Microsoft Student
                        Partner-Helwan University at Microsoft Egypt from Aug 2019 to Present.
                      </li>
                      <li >
                        Lecturer: Java SE Course in MSPs at Microsoft Egypt
                        from Apr 2019 to June 2019.
                      </li>
                      <li >
                        PR mebmer at Microsoft Student Partner-Helwan
                        University at Microsoft Egypt from Feb 2019 to Aug 2019.
                      </li>
                      <li >
                        ICPC FCI-Helwan Community from Oct 2018 to Present.
                      </li>
                      <li >
                        Project Manager at Ain Shams IHub in 2018, Projects
                        Title: Metal Detector & Vechile Robot.
                      </li>
                      <li >
                        Technical mebmer at Microsoft Student Partner-Helwan
                        University at Microsoft Egypt from Apr 2018 to Aug 2019.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  };

  render () {
    return (
      <div className="ResumeSeciton">
        <div className="main ResumeSeciton">
          {this.headerFunction ()}
          {this.educationFunction ()}
          {this.experienceFunction ()}
          {this.projectsFunction ()}
          {this.skillsFunction ()}
          {this.activiesFunction ()}
        </div>
      </div>
    );
  }
}
