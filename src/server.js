const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 465,
    auth: {
      user: "contact@alexdemos.net",
      pass: "allvans11",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 

    const mail = {
      from: 'Nodemailer <contact@alexdemos.net',
      to: "contact@alexdemos.net",
      subject: "Contact Form Submission",
      text: "Submission from " + name + ' from email: ' + email + ' with message: ' + message,
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
        console.log(error);
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });