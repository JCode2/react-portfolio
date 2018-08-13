import React, {Component} from 'react';
import WOW from 'wow.js';

class About extends Component {
  componentDidMount() {
    const wow = new WOW();
    wow.sync();
  }
  render(){
    return(
      <div className="row about-section">
        <div className="col-md-12 col-sm-12">


            <h2>About Me</h2>
            <hr/>
            <p>
            Currently I am a software engineer programming mainly in Java using the Spring framwork
            and Intersystems Cache Objectscript with experience working in both an Agile Scrum
            and Kanban environment for one of the largest financial companies in the world.
            I also have experience in tech on the business end when I worked for a
            start up based out of Central Texas.
            </p>
            <p>
            I truly enjoy being given the opportunity to learn and explore new
            skills and technologies. This along with solving challenging and
            interesting problems from a technology perspective is what fuels my
            passion for software development.
            </p>

          </div>

          <div className="col-md-6 col-sm-12">
          <h2>Education and Training</h2>
          <hr/>
          <h3><i className="fas fa-certificate"></i> Bachelors of Science</h3>
          <h3><i className="fas fa-certificate"></i> Software Engineer Bootcamp</h3>
          <h3><i className="fas fa-certificate"></i> Corporate Training in React Redux</h3>
          </div>

          <div className="col-md-6 col-sm-12 wow fadeInUp">
          <img className="profile-img" src={'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/64/s300/codeup-logo.png'} />
          <img className="profile-img" src={'https://pbs.twimg.com/profile_images/601081984534863873/MRiPrI0x_400x400.png'} />
          
          </div>

      </div>
    )
  }
}

export default About;
