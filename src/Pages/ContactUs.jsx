import { useRef } from "react";
import emailjs from "@emailjs/browser";
import 'animate.css'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_7d86cdv",
        "template_n1qvsvd",
        form.current,
        "j0N_egdr1iQL7dcly"
      )
      .then(

        (result) => {

          console.log(result.text);
          console.log("message sent");

        },
        (error) => {

          console.log(error.text);

        }

      );
      
  };

  return (

    <div className="form-div" >

      <h2 className="home-content contactus-h2 animate__animated animate__slideInDown" >Let's Connect</h2>

      <form ref={form} onSubmit={sendEmail}>

        <label>Name</label>
        <input type="text" name="user_name" className="home-content animate__animated animate__slideInLeft"/>

        <label>Email</label>
        <input type="email" name="user_email" className="home-content animate__animated animate__slideInLeft"/>

        <label>Message</label>
        <textarea name="message" className="home-content animate__animated animate__slideInLeft"/>

        <input type="submit" value="Send" className="home-content animate__animated animate__slideInUp"/>
        
      </form>

    </div>

  );
};

export default Contact;