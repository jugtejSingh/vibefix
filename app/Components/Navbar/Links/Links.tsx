import styles from "./page.module.css";
export default function Links({ text, url }: { text: string; url: string }) {
  return (
    <div className={styles.Link}>
      <a href={url}>{text}</a>
      <div className={styles.Line}></div>
    </div>
  );
}
