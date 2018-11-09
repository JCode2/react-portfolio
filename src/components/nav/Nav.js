import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Nav extends Component{

  render(){
    return(
      <div>
      const SmoothScroll = () => (
      <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <AnchorLink class="nav-item nav-link active" href="#scrollToTop"><h4>fierro</h4><span class="sr-only">(current)</span></AnchorLink>
            <AnchorLink class="nav-item nav-link" offset={() => 100} href="#about-section"><h4>about</h4></AnchorLink>
            <AnchorLink class="nav-item nav-link" offset={() => 100} href="#skills-section"><h4>skills</h4></AnchorLink>
            <AnchorLink class="nav-item nav-link" offset={() => 100} href="#projects-section"><h4>projects</h4></AnchorLink>
            <AnchorLink class="nav-item nav-link" offset={() => 30} href="#contact-section"><h4>contact</h4></AnchorLink>
          </div>
        </div>
      </nav>
    </div>
    )
  }
}

export default Nav;
