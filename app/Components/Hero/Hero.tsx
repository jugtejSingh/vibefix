import styles from "./page.module.css";
import stylesGlobal from "../../page.module.css";
import ButtonLinks from "@/app/Components/Hero/PrimaryButtonLinks/ButtonLinks";
import { acumin } from "@/app/fonts";
export default function Hero() {
  return (
    <div className={`${acumin.className} ${styles.Hero}`}>
      <h1>
        You
        <br className={stylesGlobal.MobileTextBreak} /> vibe it,
      </h1>
      <h1>We fix it</h1>
      <h5>
        We offer the cheapest, quickest and easiest <wbr />
        bug fixes, <wbr />
        so you
        <wbr /> can focus on <wbr /> being the innovator you are.
      </h5>
      <section className={styles.HeroButtons}>
        <ButtonLinks URL="#contactUs" variant="primary">
          Fix My Code
        </ButtonLinks>
        <ButtonLinks URL="#helpWith" variant="secondary">
          Learn More
        </ButtonLinks>
      </section>
    </div>
  );
}
