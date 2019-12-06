import React, {Component} from 'react';
import WOW from 'wow.js';

class Skills extends Component {

  constructor(){
    super();
    this.state = {
      frontEnd: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'jQuery', 'React', 'Enzyme', 'Angular'],
      backEnd: ['Java/Java EE', 'Python', 'SQL', 'Spring', 'Thymeleaf', 'Cucumber', 'Selenium', 'TestNG', 'Mockito'],
      dataScience: ['Machine Learning', 'Pandas', 'Numpy', 'Seaborn', 'Data Munging', 'Data Analysis', 'Data Visualization'],
      softSkills:['Agile', 'Git', 'SVN', 'Postman', 'VS Code', 'Eclipse', 'IntelliJ', , 'Jupytr Notebook', 'Confluence/Jira']
    }
  }

  componentDidMount(){
    const wow = new WOW();
    wow.sync();
  }
  render(){
    const frontEndSkills = this.state.frontEnd.map((skill) => {
      return <li>{skill}</li>
    })

    const backEndSkills = this.state.backEnd.map((skill) => {
      return <li>{skill}</li>
    })

    const softSkills = this.state.softSkills.map((skill) => {
      return <li>{skill}</li>
    })

    const dataScience = this.state.dataScience.map((ds) => {
      return <li>{ds}</li>
    })

    return(
      <div id="skills-section">
        <div className="row">
                <div className="col-md-12 col-sm-12">
                  <h2>WHAT I DO</h2>
                  <hr/>
                </div>
        </div>
        <div className="row">

        {/*Should put these in cards instead */}
                <div className="col-md-6 col-sm-12 wow fadeIn">
                  <div className="card">
                    <div className="card-body">
                      <h3>Front-End 👾</h3>
                      <p>{frontEndSkills}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 wow fadeIn">
                  <div className="card">
                    <div className="card-body">
                      <h3>Back-End ☕️</h3>
                      <p>{backEndSkills}</p>
                    </div>
                  </div>
                </div>
        </div>
        <div className="row">
                <div className="col-md-6 col-sm-12 wow fadeIn">
                  <div className="card">
                    <div className="card-body">
                      <h3>Soft Skills & Tools 👨🏻‍💻</h3>
                      <p>{softSkills}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 wow fadeIn">
                  <div className="card">
                    <div className="card-body">
                      <h3>Data Science 🧮🧪</h3>
                      <p>{dataScience}</p>
                    </div>
                  </div>
                </div>
        </div>
      </div>
    )
  }
}

export default Skills;
