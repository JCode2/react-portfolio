import React, {Component} from 'react';
import WOW from 'wow.js';

class Skills extends Component {
  componentDidMount(){
    const wow = new WOW();
    wow.sync();
  }
  render(){
    return(
      <div className="skills-section">
        <div className="row">
                <div className="col-md-12 col-sm-12">
                  <h2>What I do</h2>
                </div>
        </div>
        <div className="row">

        {/*Should put these in cards instead */}
                <div className="col-md-6 col-sm-12 wow fadeIn">
                  <hr/>
                  <h3>Front-End <i class="fas fa-code"></i></h3>
                  <h5><li>HTML</li> <li>CSS</li> <li>Javascript</li> <li>Bootstrap</li> <li>jQuery</li> <li>React</li> <li>Enzyme</li></h5>
                </div>
                <div className="col-md-6 col-sm-12 wow fadeIn">
                  <hr/>
                  <h3>Back-End <i class="fas fa-server"></i></h3>
                  <h5><li>Java</li> <li>Java EE</li> <li>MySQL</li> <li>Oracle</li> <li>Spring</li><li>Thymeleaf</li> <li>Cache Objectscript (MUMPS)</li><li>Cucumber</li></h5>
                </div>
        </div>
        <div className="row">
                <div className="col-md-6 col-sm-12 wow fadeIn">
                  <hr/>
                  <h3>Soft Skills & Tools <i class="fas fa-code-branch"></i></h3>
                  <h5><li>Agile</li> <li>Bitbucket</li> <li>Git</li> <li>Confluence</li><li>JIRA</li> <li>Scrum</li><li>Kanban</li></h5>
                </div>
        </div>
      </div>
    )
  }
}

export default Skills;
