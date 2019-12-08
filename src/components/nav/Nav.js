import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Nav extends Component{

  render(){
    return(
      <div>
      const SmoothScroll = () => (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a href={"https://bit.ly/2oAVDxz"}><i className="navbar-brand fab fa-linkedin-in fa-3x"></i></a>
            <a href={"https://github.com/joshuafierro"}><i className="navbar-brand fab fa-github fa-3x"></i></a>
            <AnchorLink className="nav-item nav-link active" href="#scrollToTop"><h4>fierro</h4><span className="sr-only">(current)</span></AnchorLink>
            <AnchorLink className="nav-item nav-link" offset={() => 100} href="#about-section"><h4>about</h4></AnchorLink>
            <AnchorLink className="nav-item nav-link" offset={() => 100} href="#skills-section"><h4>skills</h4></AnchorLink>
            <AnchorLink className="nav-item nav-link" offset={() => 100} href="#projects-section"><h4>projects</h4></AnchorLink>
            <AnchorLink className="nav-item nav-link" offset={() => 30} href="#contact-section"><h4>contact</h4></AnchorLink>
          </div>
        </div>
      </nav>
    </div>
    )
  }
}

export default Nav;
