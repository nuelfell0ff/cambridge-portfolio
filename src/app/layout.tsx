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

const previewImage = "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784285393/IMG_0016_z3ccvn.jpg";

export const metadata: Metadata = {
  title: "Timilehin Seyi Ogunsakin | Healthcare Tech Entrepreneur & Founder",
  description: "Personal portfolio of Timilehin Seyi Ogunsakin. Medical professional and healthcare technology entrepreneur bridging the gap between medicine and digital innovation.",
  icons: {
    icon: previewImage,
    apple: previewImage,
  },
  openGraph: {
    title: "Timilehin Seyi Ogunsakin | Healthcare Tech Entrepreneur & Founder",
    description: "Medical professional and healthcare technology entrepreneur building digital health solutions.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: previewImage,
        width: 800,
        height: 1000,
        alt: "Timilehin Seyi Ogunsakin Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timilehin Seyi Ogunsakin | Healthcare Tech Entrepreneur",
    description: "Medical professional and healthcare technology entrepreneur building digital health solutions.",
    images: [previewImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#0a0806] text-neutral-100 flex flex-col selection:bg-[#1F7299]/30 selection:text-[#1F7299]">
        {children}
      </body>
    </html>
  );
}