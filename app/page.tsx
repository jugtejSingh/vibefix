import styles from "./page.module.css";
import Navbar from "@/app/Components/Navbar/Navbar";
import Hero from "@/app/Components/Hero/Hero";
import HelpWith from "@/app/Components/HelpWith/HelpWith";
import Pricing from "@/app/Components/Pricing/Pricing";
export default function Home() {
  return (
    <div>
      <div className={styles.Background}>
        <Navbar />
        <Hero />
      </div>
      <HelpWith />
      <Pricing />
    </div>
  );
}
