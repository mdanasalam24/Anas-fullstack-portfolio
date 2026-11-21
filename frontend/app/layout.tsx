
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MD Anas Alam | C# .NET Backend Developer",
    template: "%s | MD Anas Alam",
  },

  description:
    "Building Intelligent Systems. Engineering Reliable APIs. Explore the portfolio of Anas Alam, a C#/.NET Backend Developer specializing in ASP.NET Core, REST APIs and SQL Server.",

  keywords: [
    "MD Anas Alam",
    "C# Developer",
    ".NET Developer",
    "ASP.NET Core",
    "Backend Developer",
    "REST API",
    "SQL Server",
    "Software Engineer",
  ],

  authors: [{ name: "MD Anas Alam" }],

  openGraph: {
    title: "MD Anas Alam | C# .NET Backend Developer",
    description:
      "Building Intelligent Systems. Engineering Reliable APIs.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
