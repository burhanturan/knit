import React, { useState } from "react";

export default function SendForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // prepare form data to be sent
    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("email", email);
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5600/send-form", {
        method: "POST",
        body: formData,
      });

      (response.ok) ? console.log("Email sent successfully") : console.log("Failed to send the email");

    } 
    catch (error) {
      console.log(`Error, sending the email: ${error}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="file">
          Upload Your Resume
        </label>

        <input
          type="file"
          id="file"
          onChange={(e)=>setFile(e.target.files[0])} 
          className="form-control"
        />
      </div>

      <div className="d-flex justify-content-center mb-4">
        <button
          type="submit"
          className="btn btn-dark w-30 mx-3 rounded-0"
          style={{ width: "110px", height: "40px" }}
        >
          SEND
        </button>
      </div>
    </form>
  );
}