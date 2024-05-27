import React, { useState, useEffect } from "react";

export default function ContuctUs() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // prepare form data to be sent
    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("http://localhost:5600/send-form", {
        method: "POST",
        body: formData,
      });

      setAlert("Email sent successfully");
      // (response.ok) ? setAlert("Email sent successfully") : setAlert("Failed to send the email");
    } 
    catch (error) {
      console.log(`Error, sending the email: ${error}`);
      setAlert("Failed to send the email");
    }
  }

  return (
    <form className="needs-validation" onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="fname">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          value={fname} 
          onChange={(e)=>setFname(e.target.value)}
          className="form-control"
          placeholder="Firstname"
          required
        />
        <div className="invalid-feedback">
          Please enter your firstname.
        </div>
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <label className="form-label" htmlFor="lname">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          value={lname} 
          onChange={(e)=>setLname(e.target.value)}
          className="form-control"
          placeholder="Lastname"
          required
        />
        <div className="invalid-feedback">
          Please enter your lastname.
        </div>
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <label className="form-label" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
          required
        />
        <div className="invalid-feedback">
          Please enter your email.
        </div>
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          value={message} 
          onChange={(e)=>setMessage(e.target.value)}
          rows="4"
          required
          placeholder="Enter your message"
        ></textarea>
        <div className="invalid-feedback">
          Please enter your message.
        </div>
      </div>

      <div className="d-flex justify-content-center">{alert}</div>

      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-dark text-white mx-3 rounded-0"
          style={{ width: "110px", height: "40px" }}
        >
          SEND
        </button>
      </div>
    </form>
  );
}