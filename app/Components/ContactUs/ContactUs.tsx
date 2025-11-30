import styles from "./page.module.css";
import Input from "@/app/Components/ContactUs/Inputs/Input";
import Image from "next/image";
import TextArea from "@/app/Components/ContactUs/TextArea/TextArea";
export default function ContactUs() {
  return (
    <div className={styles.ContactUs}>
      <h2 className={styles.ContactUsHeading}>Enquire Now</h2>
      <form className={styles.Form}>
        <section className={styles.InputFields}>
          <Input labelText="Name" />
          <Input labelText="Email" />
          <Input labelText="Type of application" />
          <Input labelText="What would you like changed" />
          <Input labelText="What programming language is the project" />
          <TextArea />
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
