import React,{Component} from 'react';

class ContactForm extends Component{
   render(){
     return(

       <form id="contact" class="col-md-8 col-sm-12 form-group" action="https://www.elformo.com/forms/71fbfd3b-dc02-4c45-bc92-e49ca7e2d9cb" method="post" accept-charset="UTF-8">
        {/*<h1>Get in touch</h1>*/}
        <p>GET IN TOUCH</p>
        <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        <input class="form-control" id="email" name="email" type="email" placeholder="Email" required/>

        <textarea class="form-control" id="comment" name="comment" type="text" placeholder="Message" rows="10" required></textarea>
        <input id="submit" class="btn btn-outline-dark btn-sm contact-button" name="submit" type="Submit" />
        </form>

     )
   }

}

export default ContactForm;
