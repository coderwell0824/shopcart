import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "%s - Shopcart online store",
    default: "Shopcart online store",
  },
  description: "Shopcart online store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
