import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar/Index';
import Index from './components/Index/Index';
import Contact from './components/Contact/Index';
import Footer from './components/Footer/Index';
import Work from './components/Work/Index';
import Projects from './components/Projects/listProjects';
import SelectProject from './components/Projects/SelectProject';
import About from './components/About/Index';
import Achievement from './components/Achievement/Index';
import Error from './components/Error/Index';

export default class App extends Component{
  
  initialSpinners = ()=>{
    return(
      <div>
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:projectID" component={SelectProject}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/achievement" component={Achievement} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/:errorLink" component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}