import React, {Component} from 'react';
import ContactForm from '../contactform/ContactForm';

class Footer extends Component {
  render(){
    return(
      <div>
        <footer className="footer navbar" id="contact-section">


              <div className='col-md-6 col-sm-12 contactform'>
              <h2>CONTACT</h2>
              {/*<p>PHONE</p>*/}
              <p>(650) 534-2840</p>
              <a href={"https://bit.ly/2oAVDxz"}><i className="fab fa-linkedin-in fa-3x"></i></a>
              &nbsp;
              &nbsp;
              &nbsp;
              <a href={"https://github.com/joshuafierro"}><i className="fab fa-github fa-3x"></i></a>
              <p className="copyright">&#169; {new Date().getFullYear()}</p>
              </div>
              <div className='col-md-6 col-sm-12'>
              {/*<h2>email[@]email.com</h2>*/}
              <ContactForm/>
              </div>


        </footer>


      </div>
    )
  }
}

export default Footer;
