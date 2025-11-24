import type { Metadata } from "next";
import styles from "./page.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeFix",
  description:
    "You vibe it, we fix it. Cheap, quick and easy bug fixing so you can spend time being the founder," +
    "while we help keep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "black", color: "white" }}
        className={styles.Effect}
      >
        {children}
      </body>
    </html>
  );
}
