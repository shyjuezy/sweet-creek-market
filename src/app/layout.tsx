import "./globals.css";

import type { Metadata } from "next";
import { Roboto, PT_Serif } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { cn } from "@/lib/utils";

// const fontSans = Inter({
//   variable: "--font-sans",
//   subsets: ["latin"],
// });

// const fontHeading = Inter({
//   variable: "--font-heading",
//   subsets: ["latin"],
// });

const fontSans = Roboto({
  variable: "--font-sans",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const fontHeading = PT_Serif({
  variable: "--font-heading",
  weight: ["400", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SweetCreek Market",
  description: "Home of the best coffee and food in the area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <Header />
        <main className="pt-[4.5rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
