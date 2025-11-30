import styles from "./page.module.css";
export default function TextArea() {
  return (
    <div className={styles.InputField}>
      <label className={styles.Label}>
        <span className={styles.Text}>
          Anything else you'd like us to know?
        </span>
        <textarea className={styles.TextArea} rows={6}></textarea>
      </label>
    </div>
  );
}
