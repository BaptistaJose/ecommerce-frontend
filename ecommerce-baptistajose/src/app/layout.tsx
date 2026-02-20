import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar/page";
import Footer from "@/components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechStore - Tu tienda de tecnología en línea",
  description: "TechStore es tu destino en línea para las últimas novedades en tecnología. Encuentra gadgets, dispositivos inteligentes y accesorios de alta calidad a precios competitivos. ¡Explora nuestra tienda y potencia tu mundo digital hoy mismo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        <main className="pt-4">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
