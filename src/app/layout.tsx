import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "perfido.ai",
  description: "create performance test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={ubuntu.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider children={children}>
            
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
