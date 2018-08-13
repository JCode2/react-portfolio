import React, {Component} from 'react';

class About extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div className="row">
        <div className="col-md-6">


            <h2>About Me</h2>
            <hr/>
            <p>
            Currently I am a software developer programming mainly in Cache
            Objectscript and Spring Java with experience working in an Agile Scrum
            and Kanban environment for one of the largest financial companies in the world.
            I also have experience in tech on the business end when I worked for a
            start up based out of Central Texas.
            </p>

          </div>

          <div className="col-md-6">
          <img className="profile-img" src={'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} />
          </div>
      </div>
    )
  }
}

export default About;
