import styles from "./page.module.css";
import stylesGlobal from "../../page.module.css";
import InformationBox from "@/app/Components/HelpWith/InformationBox/InformationBox";
export default function HelpWith() {
  return (
    <div className={styles.HelpWith}>
      <h2>
        What can we
        <br className={stylesGlobal.MobileTextBreak} /> help you with?
      </h2>
      <section className={styles.HelpWithBoxes}>
        <InformationBox name="Bug Fix" image="/Icons/Icon-01.png">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
          architecto atque autem culpa debitis, eaque eius error expedita hic
          laboriosam molestiae, necessitatibus officiis quaerat quia quis
          recusandae rem, repellendus.
        </InformationBox>

        <InformationBox name="Bug Fix" image="/Icons/Icon-02.png">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
          architecto atque autem culpa debitis, eaque eius error expedita hic
          laboriosam molestiae, necessitatibus officiis quaerat quia quis
          recusandae rem, repellendus.
        </InformationBox>

        <InformationBox name="Bug Fix" image="/Icons/Icon-03.png">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
          architecto atque autem culpa debitis, eaque eius error expedita hic
          laboriosam molestiae, necessitatibus officiis quaerat quia quis
          recusandae rem, repellendus.
        </InformationBox>
      </section>
    </div>
  );
}
