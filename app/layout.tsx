import type { Metadata } from "next";
import styles from "./page.module.css";
import "./globals.css";
import { acumin, gilroyMed } from "@/app/fonts";

export const metadata: Metadata = {
  title: "VibeFix",
  description:
    "You vibe it, we fix it. Cheap, quick and easy bug fixing so you can spend time being the founder," +
    "while we help keep",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32", type: "image/ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico" />
      </head>
      <body
        style={{ backgroundColor: "black", color: "white" }}
        className={`${gilroyMed.className} ${styles.Effect}`}
      >
        {children}
      </body>
    </html>
  );
}
