import styles from "./page.module.css";
import Image from "next/image";
type Props = {
  image: string;
  name: string;
  children: React.ReactNode;
};
export default function InformationBox({ image, name, children }: Props) {
  return (
    <div className={styles.InformationBox}>
      <Image
        src={image}
        alt="Icon"
        width={1000}
        height={1000}
        className={styles.InformationBoxImage}
      />
      <h3>{name}</h3>
      <p>{children}</p>
    </div>
  );
}
