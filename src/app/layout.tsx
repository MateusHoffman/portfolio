import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoffman Portfolio",
  description: "Portfolio Mateus Hoffman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
