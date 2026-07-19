import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ui/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Abhishek Anil | Portfolio",
  description:
    "Biomedical Engineering Student specializing in AI, Medical Imaging, Embedded Systems and Healthcare Technology.",
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
      className={`${inter.variable} ${sora.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}