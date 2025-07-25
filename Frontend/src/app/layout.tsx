import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Souji Aligners",
  description: "D Care Dental & Souji Aligners",
  icons: {
    icon: "/logo-white.png",
  },
  keywords: ["Souji", "Aligners", "teeth", "Dental", "D Care Dental"],
  authors: [{ name: "Chaitanya Kadali" }],
  openGraph: {
    title: "Souji Aligners",
    description: "Platform for D Care Dental & Souji Aligners",
    url: "https://soujialigners.com/",
    siteName: "Souji Aligners",
    images: [
      {
        url: "https://soujialigners.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Souji Aligners",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Souji Aligners",
    description: "Platform for D Care Dental & Souji Aligners.",
    images: ["https://soujialigners.com/preview.png"],
  },
  metadataBase: new URL("https://soujialigners.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
