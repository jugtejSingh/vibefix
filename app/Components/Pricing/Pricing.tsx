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
          text="Whether it’s UI glitches, broken flows, backend errors, crashes, issues with third party integrations, AI workflows, data pipelines, we dive right into your codebase or workflow to find the root cause. We apply production ready fixes that solve the issue properly and ensure the problem does not return later"
          bulletPoints={[
            "Front-end, back-end , UI, workflows, data pipelines we fix all",

            "API failures and data inconsistencies causing component failure",

            "Performance bottlenecks and random crashes",

            "Environment-specific issues such as local versus production",

            "Regression fixes and stability improvements",
          ]}
          label={"Bug Fix"}
          priceRange={"£10+"}
        />
        <BuyNowBoxes
          URL="/Icons/Icon-05.png"
          bgColor="ab13b7"
          text="Diagnostics focuses on scanning your code base extensively to find bugs, vulnerabilities and any other future structural issues which may hinder the application in production. You receive an assessment of risks, issues and how to fix them."
          label={"Diagnostics"}
          bulletPoints={[
            "Reviewing code for clarity and correctness",

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
          text="Vibe coding moves ideas into code quickly, but features need structure and experience. We turn rough or incomplete features into scalable functionality, whether building new systems, refining code, or extending existing behaviour with performance and usability in mind."
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
