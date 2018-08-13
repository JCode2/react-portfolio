import React,{Component} from 'react';

class ContactForm extends Component{
  constructor() {
    super();
  }
   render(){
     return(

       <form id="contact" class="col-md-6 col-sm-12 form-group" action="https://www.elformo.com/forms/71fbfd3b-dc02-4c45-bc92-e49ca7e2d9cb" method="post" accept-charset="UTF-8">
        {/*<h1>Get in touch</h1>*/}
        <p>EMAIL</p>
        <input class="form-control" id="name" name="name" placeholder="Name" type="text" required=""/>
        <input class="form-control" id="email" name="email" type="email" placeholder="Email" required=""/>
        <p class="message">Message</p>
        <textarea class="form-control" id="comment" name="comment" type="text" required=""></textarea>
        <input id="submit" class="btn btn-primary btn-sm contact-button" name="submit" type="Submit" />
        </form>

     )
   }

}

export default ContactForm;
