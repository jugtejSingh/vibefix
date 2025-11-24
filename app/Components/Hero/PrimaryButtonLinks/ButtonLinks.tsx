import styles from "./page.module.css";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  URL: string;
  variant: string;
};
export default function ButtonLinks({ children, URL, variant }: Props) {
  return (
    <div>
      <a
        href={URL}
        className={variant === "primary" ? styles.Primary : styles.Secondary}
      >
        {children}
      </a>
    </div>
  );
}
