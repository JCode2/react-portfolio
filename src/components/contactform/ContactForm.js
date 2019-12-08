import React,{Component} from 'react';

class ContactForm extends Component{
   render(){
     return(

       <form id="contact" className="col-md- col-sm-12 form-group contactform" action="https://www.elformo.com/forms/71fbfd3b-dc02-4c45-bc92-e49ca7e2d9cb" method="post" acceptCharset="UTF-8">
        {/*<h1>Get in touch</h1>*/}
        <h2>GET IN TOUCH</h2>
        <hr style={{backgroundColor:'#f5f5f5'}}/>
        <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        <input className="form-control" id="email" name="email" type="email" placeholder="Email" required/>

        <textarea className="form-control" id="comment" name="comment" type="text" placeholder="Message" rows="10" required></textarea>
        <input id="submit" className="btn btn-outline-dark btn-lg btn-block contact-button" name="submit" type="Submit" />
        </form>

     )
   }

}

export default ContactForm;
