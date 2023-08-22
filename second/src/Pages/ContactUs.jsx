import Typography from "@mui/material/Typography";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from 'styled-components';
import 'animate.css'

// npm i @emailjs/browser

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

    <StyledContactForm >

        <Typography variant="h2" paddingLeft='30%' className="home-content animate__animated animate__slideInDown" >Let's Connect</Typography>

        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" className="home-content animate__animated animate__slideInLeft"/>
        <label>Email</label>
        <input type="email" name="user_email" className="home-content animate__animated animate__slideInLeft"/>
        <label>Message</label>
        <textarea name="message" className="home-content animate__animated animate__slideInLeft"/>
        <input type="submit" value="Send" className="home-content animate__animated animate__slideInUp"/>
        </form>

    </StyledContactForm>

  );
};

export default Contact;


const StyledContactForm = styled.div`
  width: 40%;
  margin: -1% 0 0  25%;
  color: white;
  

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin: 2rem auto;
      cursor: pointer;
      background: black;
      width: 30%;
      color: white;
      border: none;
    }
  }
`;