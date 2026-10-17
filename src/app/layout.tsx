import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { PageTransition } from "@/components/layout/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071329",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zionprinttech.com"),
  title: "ZION PRINT TECH SOLUTIONS | Precision in Printing. Excellence in Service.",
  description: "ZION PRINT TECH SOLUTIONS specializes in flexographic printing machinery, packaging machinery, and application support services.",
  openGraph: {
    title: "ZION PRINT TECH SOLUTIONS",
    description: "Technology that performs. Support that stays.",
    type: "website",
    images: [{ url: "/og.png", width: 1728, height: 909, alt: "ZION PRINT TECH SOLUTIONS — Technology that performs. Support that stays." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZION PRINT TECH SOLUTIONS",
    description: "Technology that performs. Support that stays.",
    images: ["/og.png"],
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
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full w-full max-w-full flex flex-col font-sans text-foreground bg-background selection:bg-[#0084D6]/20 selection:text-[#0B2076]"
      >
        <Navbar />
        <main className="w-full max-w-full flex-1 flex flex-col">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
