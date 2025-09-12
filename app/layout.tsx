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
  title: "Đặng Quang Huy | Portfolio",
  description:
    "Portfolio of Đặng Quang Huy (HyuDeQueue) — aspiring devOps and backend developer. Skilled in Java, Spring Boot, FastAPI, React, Docker, and cloud platforms. Explore projects including Sportunify, TodoListFastAPI, BookStore, and more.",
  keywords: [
    "Đặng Quang Huy",
    "HyuDeQueue",
    "portfolio",
    "backend developer",
    "database architect",
    "Java",
    "Spring Boot",
    "FastAPI",
    "React",
    "Docker",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "software projects",
    "Vietnam developer"
  ],
  authors: [{ name: "Đặng Quang Huy", url: "https://github.com/HyuDeQueue" }],
  openGraph: {
    title: "Đặng Quang Huy | Portfolio",
    description:
      "An ordinary university student pursuing his dream of becoming a database architect. Browse projects, skills, and contributions.",
    url: "https://your-portfolio-domain.com",
    siteName: "Đặng Quang Huy Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/156757704?v=4",
        width: 400,
        height: 400,
        alt: "Đặng Quang Huy Avatar"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Đặng Quang Huy | Portfolio",
    description:
      "Portfolio of backend developer & aspiring database architect. Explore projects like Sportunify, TodoListFastAPI, and more.",
    images: ["https://avatars.githubusercontent.com/u/156757704?v=4"],
    creator: "@huyhoang204205"
  },
  category: "Technology"
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
