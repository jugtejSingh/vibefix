"use server";

import nodemailer from "nodemailer";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

type ContactFormState = {
  success: boolean;
  name?: string;
  email?: string;
  typeApp?: string;
  whatToChange?: string;
  language?: string;
  message?: string;
  errorMessage?: string;
};

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(3, "300 s"),
});

export async function sendEmail(prevState: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const typeApp = formData.get("typeApp") as string;
  const whatToChange = formData.get("whatToChange") as string;
  const language = formData.get("language") as string;
  const message = formData.get("message") as string;

  const returnForm: ContactFormState = {
    success: false,
  };

  if (!name) {
    returnForm.name = "The name is required";
    return returnForm;
  }

  if (!email) {
    returnForm.email = "The email is required";
    return returnForm;
  }
  if (!typeApp) {
    returnForm.typeApp = "The Type of Application is required";
    return returnForm;
  }
  if (!whatToChange) {
    returnForm.whatToChange = "This field is required";
    return returnForm;
  }
  if (!language) {
    returnForm.language = "The language is required";
    return returnForm;
  }

  if (!message) {
    returnForm.message = "The message is required";
    return returnForm;
  }
  const header = await headers();
  const ip =
    header.get("x-forwarded-for")?.split(",")[0] ??
    header.get("x-real-ip") ??
    "unknown";

  const { success, remaining, reset } = await ratelimit.limit(ip);

  if (!success) {
    returnForm.errorMessage = "Too many requests. Please try again later";
    return returnForm;
  }
  console.log("Testing");
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Type of Application:</strong> ${typeApp}</p>
      <p><strong>What do you want changed:</strong> ${whatToChange}</p>      
      <p><strong>Language:</strong> ${language}</p>       
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
    });
    returnForm.success = true;
    return returnForm;
  } catch (error) {
    returnForm.errorMessage = "Theres been an internal error, please try again";
    return returnForm;
  }
}
