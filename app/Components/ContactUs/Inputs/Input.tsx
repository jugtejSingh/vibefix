import styles from "./page.module.css";
type Props = {
  error?: string;
  autoComplete?: string;
  labelText: string;
  name: string;
};
export default function Input({ labelText, autoComplete, error, name }: Props) {
  return (
    <label className={styles.InputField}>
      <span className={styles.Label}>{labelText}</span>
      <input
        type="text"
        autoComplete={autoComplete}
        name={name}
        className={styles.Input}
        aria-invalid={!!error}
        aria-describedby={name}
      />
      <span id={name} className={styles.error} style={{ color: "#FF6B6B" }}>
        {error}
      </span>
    </label>
  );
}
