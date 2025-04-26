import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "learnwebdev",
  description: "learn web development for free",
  metadataBase: new URL("https://learnwebdev.notcodesid.xyz/"),
  openGraph: {
    title: "learn web development for free",
    description: "learn web development for free",
    url: "https://learnwebdev.notcodesid.xyz/",
    siteName: "learnwebdev",
    images: [
      {
        url: "/openimage.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "learnwebdev",
    description: "learn web development for free",
    images: ["/openimage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
