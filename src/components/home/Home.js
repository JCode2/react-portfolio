import React, {Component} from 'react';
import About from '../about/About';
import Skills from '../skills/Skills';
import Footer from '../footer/Footer';
import Projects from '../projects/Projects';
import Nav from '../nav/Nav';

class Home extends Component {
render(){
  return(
    <div id="scrollToTop">
    <Nav/>
      <div className='Jumbotron-fluid'>
        <h1 className="display-2 animated zoomInDown">F I E R R O</h1>
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
