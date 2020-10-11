import React from 'react'
import Header from './CV.Components/Header'
import Education from './CV.Components/Education'
import CareerObjective from './CV.Components/CareerObjective'
import Projects from './CV.Components/Projects'
import Experience from './CV.Components/Experience'
import Skills from './CV.Components/Skills'

import './style.css'
/*
  when i need to print the pdf i will remove bootstrap in Index.js and 
  remove live-server(X) from Projects Component in className
*/

const index = () => {
  return (
    <div className="main">
      <Header />
      <Education />
      <CareerObjective />
      <Projects />
      <Experience />
      <Skills />
    </div>
  );

};

export default index;
