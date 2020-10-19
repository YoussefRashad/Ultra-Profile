import React from 'react'
import Header from './CV.Components/Header'
import Education from './CV.Components/Education'
import CareerObjective from './CV.Components/CareerObjective'
import Projects from './CV.Components/Projects'
import Experience from './CV.Components/Experience'
import Skills from './CV.Components/Skills'

import './style.css'

// import Volunteering from './CV.Components/Volunteering'
// import Training from './CV.Components/Training'

/*
  - when i need to print the pdf i will remove bootstrap in Index.js and 
  - remove live-server(X) from (Projects, Exp, Header) Component in className
  - edit LinkedIn name
  - remove style in phone No
*/

export default function App() {
  return (
    <div className="main">
      <Header />
      <Education />
      <CareerObjective />
      <Projects />
      <Experience />
      {/* <Training /> */}
      <Skills />
      {/* <Volunteering /> */}
    </div>
  )
}
