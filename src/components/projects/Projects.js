import React, {Component} from 'react';
import WOW from 'wow.js';

class Projects extends Component{
  constructor(){
    super();

    this.state = {

      projects:[
        {
          title: 'Wiki Viewer',
          link: "https://joshuafierro.github.io/wiki-viewer/",
          date: 'Apr 2017 – Apr 2017',
          description: "Wikipedia Viewer is a web application that allows the user to enter in anything they would like to search in the input form. Once entered the user will have a list of `preview cards` displayed back to them related to their search. Technologies used are HTML, CSS, Bootstrap, Javascript, jQuery, along with AJAX requests and the Wikipedia API.",
          id:1, 
        },
        {
          title: 'Weather Map API',
          link: "https://joshuafierro.github.io/weather-map/",
          date: 'Nov 2016 – Nov 2016', 
          description: "Weather map created using HTML, CSS,Bootstrap, Javascript, jQuery, Google Maps API, and Open Weather Map API. User can see the weather for the next 3 days at any location. When map is initialized the user can search other locations to retrieve the weather forecast for the next three days.",
          id: 2
        }, 
        {
          title: 'Simple Simon',
          link: "https://joshuafierro.github.io/Simple-Simon/",
          date: 'Nov 2016 – Nov 2016',
          description: "Created a traditional 'simon says' game that generates a random sequence each time the game is played. Technologies used were HTML CSS Bootstrap, Javascript and jQuery",
          id:3, 
        },
        {
          title: 'Alamo Brew Website 2.0',
          link:  "https://github.com/joshuafierro/alamo",
          date: 'Jun 2018 - Jun 2018',
          description: "Created a Full Stack website with CRUD functionality using React.js, Node.js, Yarn, MySQL, HTML, CSS, and Bootstrap.",
          id: 4, 
        },
        {
          title: 'Spotify Dashboard',
          link:  "https://github.com/joshuafierro/spotify-live-dashboard",
          date: 'Dec 2018 - Dec 2019',
          description: "Created a dashboard to show users their top artists and tracks using the Spotify API.",
          id: 5, 
        }
      ]
    }
  }

  componentDidMount(){
    const wow = new WOW();
    wow.sync();

    new wow.init();
  }
  render(){

    const project = this.state.projects.map((project) => {
      return(
        <div key={project.id} className="col-md-6 col-sm-12 wow fadeInLeft">
          <div className="card">
            <div className="card-body">
              <a href={project.link} target="_blank"><h5 className="card-title">{project.title}</h5></a>
              <h6 className="card-subtitle mb-2 text-muted">{project.date}</h6>
              <p className="card-text">{project.description}
              </p>
            </div>
          </div>
    </div>
    );
    })

    // might use these methods later
    // const titles = this.state.projects.map((project) => {
    //   return project.title;
    // })
    // const links = this.state.projects.map((project) => {
    //   return project.link;
    // })
    // const date = this.state.projects.map((project) => {
    //   return project.date;
    // })

    return(
      <div className="row" id="projects-section">
        <h2>PORTFOLIO</h2>
    <div className="row">
            {project}
    </div>
  </div>
    )
  }
}

export default Projects;
