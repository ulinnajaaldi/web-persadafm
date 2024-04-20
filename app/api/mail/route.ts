import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { MAIL_PASS, MAIL_USER } from "@/constants/config";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
  });

  try {
    const mail = transporter.sendMail({
      from: email as string,
      to: MAIL_USER,
      subject: subject as string,
      text: message as string,
      html: `
            <h1>From : ${name}</h1>
            <h2>Email : ${email}</h2>
            <p>${message}</p>
            `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Email failed to send" });
  }
}
