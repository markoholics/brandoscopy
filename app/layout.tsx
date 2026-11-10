import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BrandoScopy · Brand Atelier, Mumbai",
  description:
    "An independent brand atelier in Mumbai, founded by Mohammad H. Rahman. We sculpt personal and luxury brands.",
  keywords: "brand atelier, personal branding, luxury brands, Mumbai, India, BrandoScopy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${cormorant.variable}`}>
      <body
        className="min-h-screen"
        style={{ background: "#FAF6EE", color: "#2c1215", fontFamily: "var(--font-geist-sans), 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
