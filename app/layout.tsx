import type { Metadata } from "next";
import "./globals.css";
import React, { FC } from "react";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      {/* <html lang="en" suppressHydrationWarning> */}
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="h-screen bg-[#0d0d0d] dark:bg-blue-500 p-5">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
