import type { Metadata } from "next";
import { instrumentSans, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lyn Jung — Design & Frontend Engineer",
  description:
    "Portfolio of Lyn Jung, a Design & Frontend Engineer and Georgia Tech junior crafting clean, meticulous digital interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
