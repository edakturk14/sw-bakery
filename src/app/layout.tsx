"use client"
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { CartProvider } from "@/components/cartContext";
import { Providers } from "@/app/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <CartProvider>
          <body className={`min-h-screen flex flex-col`}>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </body>
        </CartProvider>
      </Providers>
    </html>
  );
}