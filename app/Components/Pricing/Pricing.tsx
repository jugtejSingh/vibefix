import styles from "./page.module.css";
import BuyNowBoxes from "@/app/Components/Pricing/BuyNowBoxes/BuyNowBoxes";
export default function Pricing() {
  return (
    <div id={"pricing"} className={styles.Pricing}>
      <div className={styles.PricingHeader}>
        <h3 className={styles.PricingTitle}>Pricing</h3>
        <div className={styles.VerticalLine}></div>
      </div>
      <div className={styles.BuyNowBoxes}>
        {/*The space in the label is important to allow 2 lines */}
        <BuyNowBoxes
          URL="/Icons/Icon-04.png"
          bgColor="4c1ea5"
          text="Whether it’s UI glitches, broken flows, backend errors, crashes, issues with third party integrations, AI workflows, data pipelines, we dive right into your codebase to find the root cause. We apply production ready fixes that solve the issue properly and ensure the problem does not return later"
          bulletPoints={[
            "Front-end, back-end , UI, workflows, data pipelines we fix all",

            "API failures and data inconsistencies causing component failure",

            "Performance bottlenecks and random crashes",

            "Environment-specific issues such as local versus production",

            "Regression fixes and stability improvements",
          ]}
          label={"Bug Fix                                                  "}
          priceRange={"£10+"}
        />
        <BuyNowBoxes
          URL="/Icons/Icon-05.png"
          bgColor="ab13b7"
          text="Diagnostics focuses on scanning your code base extensively to find bugs, vulnerabilities and any other future structural issues which may hinder the application in production. You receive an assessment of risks, issues and how to fix them."
          label={"Diagnostics"}
          bulletPoints={[
            "Reviewing code for clarity, structure and correctness",

            "Identifying vulnerabilities and unsafe patterns",

            "Detecting code bloat and unnecessary complexity",

            "Finding duplicated or dead code",

            "Highlighting performance and scalability risks",

            "Providing clear recommendations",
          ]}
          priceRange={"£30+"}
        />
        <BuyNowBoxes
          URL="/Icons/Icon-06.png"
          bgColor="2e94bc"
          text="Vibecoding is a brilliant tool to get up and running, however theres just times the LLM doesnt listen to you and isnt able to make the feature as you want, At vibefix will be complete the rough/incomplete features as well as make any that you may require for the amazing application"
          bulletPoints={[
            "Building new features for both front-end and back-end",

            "Providing AI functionality such as workflows, automation and data pipelines",

            "Integrating APIs and third-party services",

            "Improving UX flows and interactions",

            "Addition of testing",

            "Making features production-ready and scalable",
          ]}
          label={"Feature Development"}
          priceRange={"£50+"}
        />
      </div>
    </div>
  );
}
