import styles from "./page.module.css";
type Props = {
  error?: boolean;
  labelText: string;
};
export default function Input({ labelText }: Props) {
  return (
    <div className={styles.InputField}>
      <label className={styles.Label}>
        <span className={styles.Text}>{labelText}</span>
        <input type="text" className={styles.Input} />
        <span style={{ visibility: "hidden" }}>Error</span>
      </label>
    </div>
  );
}
