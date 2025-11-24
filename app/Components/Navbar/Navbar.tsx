import Image from "next/image";
import styles from "./page.module.css";
import Links from "@/app/Components/Navbar/Links/Links";
export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Image
        src={"/Logo.png"}
        alt="Logo"
        width={1080}
        height={1920}
        className={styles.Navbar__logo}
      />
      <section className={styles.Navbar__links}>
        <Links text="Home" url="#" />
        <Links text="Contact Us" url="#" />
        <Links text="Pricing" url="#" />
      </section>
    </div>
  );
}
