const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");

serverEmail=process.env.REACT_APP_SERVER_USER_EMAIL;
serverAppPass=process.env.REACT_APP_SERVER_USER_APP_PASS;
receiverEmail=process.env.REACT_APP_SERVER_RECEIVER_EMAIL;

const PORT = 5600;

const app = express();
const upload = multer();

// Replace it with your actual email service credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: serverEmail,
    pass: serverAppPass,
  }
});

app.post("/send-form", upload.single("file"), async(req, res) => {
  const {fname, lname, email, message} = req.body;
  const file = req.file;

  // prepare the email content
  const mailOptions = {
    from: email,
    to: receiverEmail,
    subject: `${message ? 'New Contact Submission' : 'New Form Upload'}`,
    html: `
      <p>First Name: ${fname}</p>
      <p>Last Name: ${lname}</p>
      <p>Email: ${email}</p>
      <p>${message ? message : ''}</p>
    `,
    attachments: file ? [{filename: file.originalname, content: file.buffer}] : [],
  };

  // Send the email
  await transporter.sendMail(mailOptions);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
