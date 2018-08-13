import React, {Component} from 'react';
import ContactForm from '../contactform/ContactForm';

class Footer extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <footer className="footer navbar">


              <div className='col-md-4 col-sm-12'>
              <h4>CONTACT ME</h4>
              <p>PHONE</p>
              <h2>(650) ***-****</h2>
              </div>
              <div className='col-md-6 col-sm-12'>
              {/*<h2>email[@]email.com</h2>*/}
              <ContactForm/>
              <p className="copyright">&#169; {new Date().getFullYear()}</p>
              </div>


        </footer>


      </div>
    )
  }
}

export default Footer;
