import type { Metadata } from "next";
import Script from "next/script";
import { Cinzel_Decorative, Raleway } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "whispers of yu",
  description:
    "stories, coffee, and quiet magic — whispered through the eyes of Yu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${cinzel.variable} antialiased`}>
        <header>
          <nav className="flex shadow-md">
            <ul className="flex justify-center gap-6 p-4 w-full font-raleway">
              <Link href="/" className="cursor-pointer">
                home
              </Link>
              <Link href="/about" className="cursor-pointer">
                about me
              </Link>
            </ul>
          </nav>
        </header>
        {children}
        <Script
          src="https://unpkg.com/website-easter-egg@1.1.2/dist/easter-egg.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
