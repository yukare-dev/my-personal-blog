import type { Metadata } from "next";
import Script from "next/script";
import { Cinzel_Decorative, Raleway } from "next/font/google";
import "./globals.css";

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
          <nav className="border-1 flex">
            <ul className="flex justify-center gap-6 p-4 w-full font-raleway">
              <li className="cursor-pointer">home</li>
              <li className="cursor-pointer">about me</li>
              <li className="cursor-pointer">archives</li>
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
