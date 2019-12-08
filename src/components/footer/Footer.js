import React, {Component} from 'react';
import ContactForm from '../contactform/ContactForm';

class Footer extends Component {
  render(){
    return(
      <div>
        <footer className="footer navbar" id="contact-section">
              <div className='col-md-12 col-sm-12'>
                <ContactForm/>
              </div>
              <div className='col-md-12 col-sm-12 socialinks footnote'>
                <p>Fierro &#169; {new Date().getFullYear()}</p>
              </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
