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
  description: "D Care Dental & Souji Aligners teeth aligners telangana hyderabad",
  icons: {
    icon: "/logo.ico",
  },
  keywords: ["Souji", "Aligners", "teeth", "Dental", "D Care Dental","D Care Multi Speciality Dental Hospital","Siddipet", "Hyderabad","Telangana"],
  authors: [{ name: "Chaitanya Kadali" }],
  openGraph: {
    title: "Souji Aligners",
    description: "Platform for D Care Dental & Souji Aligners teeth aligners telangana hyderabad",
    url: "https://soujialigners.com/",
    siteName: "Souji Aligners",
    images: ["https://soujialigners.com/profile.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Souji Aligners",
    description: "Platform for D Care Dental & Souji Aligners.",
    images: ["https://soujialigners.com/profile.jpg"],
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
      <head>
        {/*  add JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Souji Aligners D Dental Care",
              url: "https://soujialigners.com",
              image: "https://soujialigners.com/profile.jpg",
              sameAs: [
                "https://www.instagram.com/dcaredental",
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
