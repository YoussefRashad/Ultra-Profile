import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Pages
import Home from './Pages/Home/index'
import Projects from './Pages/Projects/index'
import SelectProject from './Pages/SelectProject/index'
import About from './Pages/About/index'
import Achievement from './Pages/Achievement/index'
import Contact from './Pages/Contact/index'
import Error from './Pages/Error/index'

// Components
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import Work from './components/Work/index'


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