import React, {Component} from 'react';
import About from '../about/About';
import Skills from '../skills/Skills';
import Footer from '../footer/Footer';
import Projects from '../projects/Projects';
// import illusion from 'illusion.png';
// import { Jumbotron, Button } from 'reactstrap';

class Home extends Component {
  constructor(){
    super();
  }
render(){
  return(
    <div>
      <div className='Jumbotron-fluid'>
        <h3 className="display-2 animated zoomInDown">F I E R R O</h3>
      </div>
      <div className="container">
          <About/>
          <Skills/>
          <Projects/>
      </div>
      <Footer/>
    </div>
    )
  }
}
export default Home;
