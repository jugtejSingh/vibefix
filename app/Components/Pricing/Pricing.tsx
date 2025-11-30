import styles from "./page.module.css";
import BuyNowBoxes from "@/app/Components/Pricing/BuyNowBoxes/BuyNowBoxes";
export default function Pricing() {
  return (
    <div className={styles.Pricing}>
      <div className={styles.PricingHeader}>
        <h3 className={styles.PricingTitle}>Pricing</h3>
        <div className={styles.VerticalLine}></div>
      </div>
      <div className={styles.BuyNowBoxes}>
        <BuyNowBoxes
          URL="/Icons/Icon-04.png"
          bgColor="4c1ea5"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aperiam aspernatur beatae deleniti dolorem ducimus enim esse id inventore, ipsa laborum magni maiores maxime minus modi nam natus nesciunt nobis numquam odio officia omnis perspiciatis quas ratione recusandae reprehenderit sit soluta sunt tenetur voluptates! Accusamus aspernatur assumenda distinctio, eos est eum explicabo facilis inventore iste, iusto, nostrum ratione rem saepe sequi soluta veritatis voluptates? Adipisci asperiores illum labore magnam nam, quasi quo reiciendis voluptas. Alias beatae consequatur corporis cumque dolore eos facilis, illo libero maxime, odit porro quasi, quia quos temporibus totam? Autem earum nihil provident quia quisquam ullam vel."
        />
        <BuyNowBoxes
          URL="/Icons/Icon-05.png"
          bgColor="ab13b7"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aperiam aspernatur beatae deleniti dolorem ducimus enim esse id inventore, ipsa laborum magni maiores maxime minus modi nam natus nesciunt nobis numquam odio officia omnis perspiciatis quas ratione recusandae reprehenderit sit soluta sunt tenetur voluptates! Accusamus aspernatur assumenda distinctio, eos est eum explicabo facilis inventore iste, iusto, nostrum ratione rem saepe sequi soluta veritatis voluptates? Adipisci asperiores illum labore magnam nam, quasi quo reiciendis voluptas. Alias beatae consequatur corporis cumque dolore eos facilis, illo libero maxime, odit porro quasi, quia quos temporibus totam? Autem earum nihil provident quia quisquam ullam vel."
        />
        <BuyNowBoxes
          URL="/Icons/Icon-06.png"
          bgColor="2e94bc"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aperiam aspernatur beatae deleniti dolorem ducimus enim esse id inventore, ipsa laborum magni maiores maxime minus modi nam natus nesciunt nobis numquam odio officia omnis perspiciatis quas ratione recusandae reprehenderit sit soluta sunt tenetur voluptates! Accusamus aspernatur assumenda distinctio, eos est eum explicabo facilis inventore iste, iusto, nostrum ratione rem saepe sequi soluta veritatis voluptates? Adipisci asperiores illum labore magnam nam, quasi quo reiciendis voluptas. Alias beatae consequatur corporis cumque dolore eos facilis, illo libero maxime, odit porro quasi, quia quos temporibus totam? Autem earum nihil provident quia quisquam ullam vel."
        />
      </div>
    </div>
  );
}
