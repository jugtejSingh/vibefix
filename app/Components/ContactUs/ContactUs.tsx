"use client";
import styles from "./page.module.css";
import Input from "@/app/Components/ContactUs/Inputs/Input";
import Image from "next/image";
import TextArea from "@/app/Components/ContactUs/TextArea/TextArea";
import { sendEmail } from "@/app/Actions/sendEmail";
import { useActionState } from "react";

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

const initialState: ContactFormState = {
  success: false,
};

export default function ContactUs() {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return (
    <div className={styles.ContactUs}>
      <h2 className={styles.ContactUsHeading}>Enquire Now</h2>
      <form className={styles.Form} action={formAction}>
        <section className={styles.InputFields}>
          <Input
            labelText="Name"
            autoComplete={"name"}
            error={state.name}
            name={"name"}
          />
          <Input
            labelText="Email"
            autoComplete={"email"}
            error={state.email}
            name={"email"}
          />
          <Input
            labelText="Type of application (RAG, Messaging, Social Media, Workflow etc)"
            error={state.typeApp}
            name={"typeApp"}
          />
          <Input
            labelText="What would you like changed (Dashboard bug, Authentication, Bloated Code)"
            error={state.whatToChange}
            name={"whatToChange"}
          />
          <Input
            labelText="What programming language is the project, include frameworks (Javascript, Python, Java etc)"
            error={state.language}
            name={"language"}
          />
          <TextArea />
          {state.success ? (
            <h3 style={{ color: "white" }}>Your message has been sent</h3>
          ) : null}
          {state.errorMessage ? (
            <h3 style={{ color: "red" }}>
              There has been an error, please try again
            </h3>
          ) : null}
          <button className={styles.Button}>SUBMIT</button>
        </section>
        <section className={styles.ImageAnchor}>
          <Image
            src={"/Illustrations/Illustration.png"}
            alt={"Icon"}
            width={1920}
            height={1080}
            className={styles.Image}
          />
        </section>
      </form>
    </div>
  );
}
