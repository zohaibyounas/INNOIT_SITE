import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("Received POST request to /api/email");
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    // const transporter = createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: 465, // Use 465 for SSL or 587 for STARTTLS
    //   secure: true,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525, // Use 465 for SSL or 587 for STARTTLS
      auth: {
        user: "db6b669df2c85e",
        pass: "6fba4f58ec95cf",
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Message from ${name}`,
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
