import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper"; // Import the wrapper

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zemex",
  description: "Zemex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        {/* Wrap children with the logic component */}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}