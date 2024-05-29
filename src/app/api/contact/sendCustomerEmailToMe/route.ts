import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateHtmlCustomerEmail, ICustomerEmail } from "./htmlCustomerEmail";

export async function POST(request: NextRequest) {
  try {
    const { email, subject, message }: ICustomerEmail = await request.json();

    // Create transporter with Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MY_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASS_APP,
      },
    });

    // Generate HTML content for the email
    const emailContent = generateHtmlCustomerEmail({ email, subject, message });

    // Setup mail options
    const mailOptions = {
      from: email,
      to: process.env.NEXT_PUBLIC_MY_EMAIL,
      subject: subject,
      html: emailContent.html,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Uncomment the following code to send response email to customer

    // Send response email to customer
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/contact/sendResponseEmailToCustomer`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the response was successful
    if (!response.ok) {
      throw new Error("Failed to send response email to customer");
    }

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
