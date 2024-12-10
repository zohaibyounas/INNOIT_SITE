import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("Received POST request to /api/email");

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true, // Use true for SSL (465), false for STARTTLS (587)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Message from ${name}`,
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to send email." }),
      { status: 500 }
    );
  }
}
