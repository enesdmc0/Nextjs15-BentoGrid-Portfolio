import type { Metadata } from "next";
import "./globals.css";
import React, { FC } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from 'geist/font/sans';


export const metadata: Metadata = {
  title: "Enes Demirci",
  description: "Enes Demirci's personal website",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      {/* <html lang="en" suppressHydrationWarning> */}
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="lg:h-screen bg-[#0d0d0d] dark:bg-zinc-100 p-3 md:p-5">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
