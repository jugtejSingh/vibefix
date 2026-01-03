import styles from "./page.module.css";
import Image from "next/image";
type Props = {
  URL: string;
  bgColor: "4c1ea5" | "ab13b7" | "2e94bc";
  text: string;
  label: string;
  priceRange: string;
  bulletPoints: string[];
};
export default function BuyNowBoxes({
  URL,
  bgColor,
  text,
  label,
  priceRange,
  bulletPoints,
}: Props) {
  return (
    <div className={styles.BuyNowBox}>
      <div
        className={styles.InnerBox}
        style={{ backgroundColor: `#${bgColor}` }}
      >
        <section className={styles.InnerBoxHeading}>
          <h3 className={styles.InnerBoxHeadingText}>{label}</h3>
          <Image
            src={URL}
            width={400}
            height={400}
            alt="Icon"
            className={styles.InnerBoxIcons}
          />
        </section>
        <section className={styles.PriceAndText}>
          <p className={styles.Prices}>{priceRange}</p>
          <p className={styles.InnerBoxText}>{text}</p>
          <section className={styles.BulletPoints}>
            {bulletPoints &&
              bulletPoints.map((item, index) => (
                <div key={index} className={styles.BulletPointText}>
                  <Image
                    src={"/Icons/pointer-01.png"}
                    alt={"Bullet point"}
                    width={15}
                    height={15}
                  />
                  <p>{item}</p>
                </div>
              ))}
          </section>
        </section>
        <a href={"#contactUs"} className={styles.InnerBoxButton}>
          BUY NOW
        </a>
      </div>
    </div>
  );
}
