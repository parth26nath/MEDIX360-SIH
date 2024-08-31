import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MEDIX360",
  /* Created By Parth Nath Chauhan imported splash
 */
  description: "HOSPITIALIZATION AT NEXT LEVEL ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* Created By Parth Nath Chauhan
 */
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
