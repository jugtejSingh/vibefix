import styles from "./page.module.css";
import BuyNowBoxes from "@/app/Components/Pricing/BuyNowBoxes/BuyNowBoxes";
export default function Pricing() {
  return (
    <div className={styles.Pricing}>
      <div className={styles.PricingHeader}>
        <div className={styles.VerticalLine}></div>
      </div>
      <div className={styles.BuyNowBoxes}>
        <BuyNowBoxes />
        <BuyNowBoxes />
        <BuyNowBoxes />
      </div>
    </div>
  );
}
