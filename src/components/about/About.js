import React, {Component} from 'react';
import WOW from 'wow.js';

class About extends Component {
  componentDidMount() {
    const wow = new WOW();
    wow.sync();
  }
  render(){
    return(
      <div className="row" id="about-section">
        <div className="col-md-12 col-sm-12 justifyText">


            <h2>ABOUT ME</h2>
            <hr/>
            <div className="col-md-12 col-sm-12">
            <p>
            Currently I am a software engineer programming mainly in Java
            and React.js with experience working in both an Agile Scrum
            and Kanban environment for one of the largest financial companies in the world.
            I also have experience in tech on the business side when I worked for a version control
            start up based out of Texas.
            </p>
            </div>
            <div className="col-md-12 col-sm-12">
            <p>
            I truly enjoy being given the opportunity to learn and explore new
            skills and technologies. This along with solving challenging and
            interesting problems from a technology perspective is what fuels my
            passion for software development.
            </p>
            </div>

          </div>

          <div className="col-md-6 col-sm-12">
          <h2>Education and Training</h2>
          <hr/>
          <h3 style={{color:'black'}}><i className="fas fa-certificate"></i> Bachelors of Science</h3>
          <h3 style={{color:'black'}}><i className="fas fa-certificate"></i> Software Engineer Bootcamp</h3>
          <h3 style={{color:'black'}}><i className="fas fa-certificate"></i> Corporate Training in React Redux</h3>
          </div>

          <div className="col-md-6 col-sm-12 wow fadeInUp">
          <img className="profile-img" src={'https://upload.wikimedia.org/wikipedia/commons/5/51/Utsalogo1.png'} alt="UTSA"/>
          <img className="profile-img" src={'https://wearetribu.com/wp-content/uploads/2019/01/codeup-duck-min.png'} alt=""/>
          <img className="profile-img" src={'https://cdn-images-1.medium.com/max/1200/1*DhnMT5cYCZoatAPOPFP7cA.png'} alt="Object Partners"/>
          </div>

      </div>
    )
  }
}

export default About;
