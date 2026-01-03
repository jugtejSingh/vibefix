import styles from "./page.module.css";
import stylesGlobal from "../../page.module.css";
import InformationBox from "@/app/Components/HelpWith/InformationBox/InformationBox";
export default function HelpWith() {
  return (
    <div className={styles.HelpWith} id={"helpWith"}>
      <h2>
        What can we
        <br className={stylesGlobal.MobileTextBreak} /> help you with?
      </h2>
      <section className={styles.HelpWithBoxes}>
        <InformationBox name="Bug Fix" image="/Icons/Icon-01.png">
          At Vibefix, you vibe it and we fix it. We are skilled at fixing bugs.
          Doesnt matter the language or task. If theres an issue, we can fix it.
          It could be a simple label name change all the way to reworking
          dashboards to eradicate bugs
        </InformationBox>

        <InformationBox name="Diagnostics" image="/Icons/Icon-02.png">
          AI is a brilliant tool, however it still gets basic security wrong. It
          can range from form inputs that arent safe all the way to your
          database being exposed for anyone to see. At Vibefix we will go
          through the application and tell you what to change and how
        </InformationBox>

        <InformationBox name="Feature Development" image="/Icons/Icon-03.png">
          For those times where the LLM just seems to not listen to anything you
          say and make the features you want, we do that too. It can be a simple
          form all the way to addition of agentic AI. We do it all
        </InformationBox>
      </section>
    </div>
  );
}
