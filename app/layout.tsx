import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serey Sunteang",
  description:
    "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS",
  icons: {
    icon: "/profile/sunteang.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}
