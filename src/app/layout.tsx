import "./globals.scss";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { PHProvider } from "./providers";

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

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
      <PHProvider>
        <PostHogPageView />
        <body>{children}</body>
      </PHProvider>
    </html>
  );
}
