import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Pages
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import SelectProject from './Pages/SelectProject'
import About from './Pages/About'
import Achievement from './Pages/Achievement'
import Contact from './Pages/Contact'
import Error from './Pages/Error'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Work from './components/Work'


function App(){
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/projects' component={Projects} /> 
        <Route exact path='/projects/:id' component={SelectProject} />
        <Route exact path='/about' component={About} />
        <Route exact path='/achievement' component={Achievement} />
        <Route exact path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
export default App;