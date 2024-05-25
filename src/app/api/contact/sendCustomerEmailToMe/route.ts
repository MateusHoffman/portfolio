import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateHtmlCustomerEmail, ICustomerEmail } from "./htmlCustomerEmail";

export async function POST(request: NextRequest) {
  try {
    const { email, subject, message }: ICustomerEmail = await request.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env."mateushoffmandev@gmail.com",
        pass: process.env."xtsc zwwh euqf ilwt",
      },
    });

    const emailContent = generateHtmlCustomerEmail({ email, subject, message });

    const mailOptions = {
      from: email,
      to: process.env."mateushoffmandev@gmail.com",
      subject: subject,
      html: emailContent.html,
    };

    await transporter.sendMail(mailOptions);

    await fetch(
      "http://localhost:3000/api/contact/sendResponseEmailToCustomer",
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

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
