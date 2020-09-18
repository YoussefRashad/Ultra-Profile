import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Projects extends Component {

  state = {
    MouseEnter:false
  }

  ToggleMouseEnterOrLeave = ()=> this.setState({MouseEnter:!this.state.MouseEnter})

  BackgroundContent = ()=>{
    return this.state.MouseEnter ? {color:'#000', fontSize:'30px', textCenter:'center', marginBottom:'80px'} : {opacity:'0'}
  }
  ObacityImage = ()=>{
    return this.state.MouseEnter ? {opacity:'0.3'} : {}
  }

  carosuelShowList = () => {
    return (
      <div 
        id="carouselExampleIndicators"
        className="carousel slide container w-50 pb-5"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          <li data-target="#carouselExampleIndicators" data-slide-to="3" />
          <li data-target="#carouselExampleIndicators" data-slide-to="4" />
          <li data-target="#carouselExampleIndicators" data-slide-to="5" />
          <li data-target="#carouselExampleIndicators" data-slide-to="6" />
          <li data-target="#carouselExampleIndicators" data-slide-to="7" />
        </ol>
        <div className="carousel-inner" onMouseEnter={this.ToggleMouseEnterOrLeave} onMouseLeave={this.ToggleMouseEnterOrLeave}>
          <div className="carousel-item active" >
            <img
              src="./images/Projects/Index/AllProjects.jpg"
              className="d-block w-100 rounded img-thumbnail"
              alt="Go To Projects Section" style={this.ObacityImage()}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={this.BackgroundContent()}>First slide label</h5>
              <p style={this.BackgroundContent()}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link to="/projects" className="btn btn-primary">SHOW ALL PROJECTS</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/Projects/Index/MERN1.jpeg"
              className="d-block w-100 rounded img-thumbnail"
              alt="Go To Projects Section" style={this.ObacityImage()}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={this.BackgroundContent()}>First slide label</h5>
              <p style={this.BackgroundContent()}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link to="/projects" className="btn btn-primary">SHOW ALL PROJECTS</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/Projects/Index/Node1.jpg"
              className="d-block w-100 rounded img-thumbnail"
              alt="Go To Projects Section" style={this.ObacityImage()}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={this.BackgroundContent()}>First slide label</h5>
              <p style={this.BackgroundContent()}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link to="/projects" className="btn btn-primary">SHOW ALL PROJECTS</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/Projects/Index/React.png"
              className="d-block w-100 rounded img-thumbnail"
              alt="Go To Projects Section" style={this.ObacityImage()}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={this.BackgroundContent()}>First slide label</h5>
              <p style={this.BackgroundContent()}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link to="/projects" className="btn btn-primary">SHOW ALL PROJECTS</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/Projects/Index/MERN2.jpg"
              className="d-block w-100 rounded img-thumbnail"
              alt="Go To Projects Section" style={this.ObacityImage()}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={this.BackgroundContent()}>First slide label</h5>
              <p style={this.BackgroundContent()}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link to="/projects" className="btn btn-primary">SHOW ALL PROJECTS</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/Projects/Index/portfolio-img6.jpg"
              className="d-block w-100 rounded img-thumbnail"
              alt="Go To Projects Section" style={this.ObacityImage()}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={this.BackgroundContent()}>First slide label</h5>
              <p style={this.BackgroundContent()}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link to="/projects" className="btn btn-primary">SHOW ALL PROJECTS</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/Projects/Index/webDesign.jpg"
              className="d-block w-100 rounded img-thumbnail"
              alt="Go To Projects Section" style={this.ObacityImage()}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={this.BackgroundContent()}>First slide label</h5>
              <p style={this.BackgroundContent()}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link to="/projects" className="btn btn-primary">SHOW ALL PROJECTS</Link>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  };
  render () {
    return (
      <div style={{backgroundColor: '#f8f8f8'}}>
        <h1 className="display-5 text-center my-5 pt-5">
            My Projects
        </h1>
        {this.carosuelShowList()}
      </div>
    );
  }
}

export default Projects;
