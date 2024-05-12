"use client"; // This is a client component

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// const MY_SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID;
// const MY_TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID;
// const MY_PUBLIC_KEY = process.env.REACT_APP_MY_PUBLIC_KEY;

const MY_SERVICE_ID = "service_jpu1byk";
const MY_TEMPLATE_ID = "template_qz4ax4w";
const MY_PUBLIC_KEY = "OMVT3CecYzoO3JcIs";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(MY_SERVICE_ID);

    emailjs
      .sendForm(
        MY_SERVICE_ID, 
        MY_TEMPLATE_ID,
        form.current, {
        publicKey: MY_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          console.log(error)
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br/>
      <input type="text" name="user_name" /><br/>
      <label>Email</label><br/>
      <input type="email" name="user_email" /><br/>
      {/* <input type="file" name='file'></input><br/> */}
      {/* <label>Upload File</label><br/> */}
      <label>Message</label><br/>
      <textarea name="message" /><br/>
      <input type="submit" value="Send" /><br/>
    </form>
  );
};