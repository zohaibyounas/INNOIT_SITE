const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const e = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(
  cors({
    exposedHeaders: ["Content-Length", "Authorization"],
    origin: "http://localhost:3000 , https://innoit.org",
    credentials: true,
  })
);

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate the input data
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Please provide all fields (name, email, message)." });
  }

  // Set up the transporter for sending the email
  const transporter = nodemailer.createTransport({
    host: "mail.innoit.org", // Replace with your SMTP server
    port: 465, // Or 587 (depending on your SMTP configuration)
    secure: true, // Use true for 465, false for 587
    auth: {
      user: "info@innoit.org", // Your email address
      pass: "**7Goodman", // Your email account password
    },
  });

  const mailOptions = {
    from: email, // Sender's email (from the user)
    to: "info@innoit.org", // Recipient's email
    subject: `New Message from ${name}`,
    text: `You have received a new message from:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  console.log(mailOptions);

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send email. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
