import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json(); // Read the body data

    // Validate the input data
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please provide all fields (name, email, message)." },
        { status: 400 }
      );
    }

    // Set up the transporter for sending the email
    const transporter = createTransport({
      host: "mail.innoit.org", // Replace with your SMTP server
      port: 465, // Or 587 (depending on your SMTP configuration)
      secure: true, // Use true for 465, false for 587
      auth: {
        user: "info@innoit.org", // Your email address
        pass: "**7Goodman", // Your email account password
      },
    });

    // Set up the mail options
    const mailOptions = {
      from: email, // Sender's email (from the user)
      to: "info@innoit.org", // Recipient's email
      subject: `New Message from ${name}`,
      text: `You have received a new message from:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
