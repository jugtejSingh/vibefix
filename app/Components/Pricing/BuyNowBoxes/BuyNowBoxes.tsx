import styles from "./page.module.css";
import Image from "next/image";
type Props = {
  URL: string;
  bgColor: "4c1ea5" | "ab13b7" | "2e94bc";
  text: string;
};
export default function BuyNowBoxes({ URL, bgColor, text }: Props) {
  return (
    <div className={styles.BuyNowBox}>
      <div
        className={styles.InnerBox}
        style={{ backgroundColor: `#${bgColor}` }}
      >
        <section className={styles.InnerBoxHeading}>
          <h3 className={styles.InnerBoxHeadingText}>Code Support</h3>
          <Image
            src={URL}
            width={400}
            height={400}
            alt="Icon"
            className={styles.InnerBoxIcons}
          />
        </section>
        <section>
          <p className={styles.InnerBoxText}>{text}</p>
        </section>
        <button className={styles.InnerBoxButton}>Buy Now</button>
      </div>
    </div>
  );
}
