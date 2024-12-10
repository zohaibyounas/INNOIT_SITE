import { createTransport } from "nodemailer";

export async function POST(req) {
  // Set CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*", // Or use specific domains, not "*"
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400, headers }
      );
    }

    // ... rest of the code

    return new Response(
      JSON.stringify({ message: "Email sent successfully." }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
      headers,
    });
  }
}
