import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateHtmlResponseEmail } from "./htmlResponseEmail";

type IResponseData = {
  email: string
}

export async function POST(request: NextRequest) {
  try {
    const { email }: IResponseData = await request.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env."mateushoffmandev@gmail.com",
        pass: process.env."xtsc zwwh euqf ilwt",
      },
    });

    const emailContent = generateHtmlResponseEmail();

    const mailOptions = {
      from: process.env."mateushoffmandev@gmail.com",
      to: email,
      subject: 'Agradeço pelo contato e responderei em breve.',
      html: emailContent.html,
    };

    console.log('mailOptions: ', mailOptions);
    await transporter.sendMail(mailOptions);
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
