import styles from "./page.module.css";
type Props = {
  error?: string;
  name: string;
  label: string;
};

export default function TextArea({ error, name, label }: Props) {
  return (
    <div className={styles.InputField}>
      <label className={styles.Label}>
        <span className={styles.Text}>{label}</span>
        <textarea className={styles.TextArea} rows={6} name={name}></textarea>
        <span className={styles.error} style={{ color: "yellow" }}>
          {error}
        </span>
      </label>
    </div>
  );
}
