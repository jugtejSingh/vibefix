import styles from "./page.module.css";
export default function Input() {
  return (
    <div className={styles.InputField}>
      <label className={styles.Label}>
        <span className={styles.Text}>Name</span>
        <input type="text" className={styles.Input} />
      </label>
    </div>
  );
}
