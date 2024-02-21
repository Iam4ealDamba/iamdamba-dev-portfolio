import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "IamDamba Dev Portfolio",
  description: "IamDamba Dev Portfolio - Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
