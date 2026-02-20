import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LunAgency - Desarrollo Web y Diseño Digital",
  description:
    "Agencia de desarrollo web especializada en e-commerce, sitios institucionales y soluciones empresariales. Transformamos ideas en realidad digital.",
  keywords: [
    "desarrollo web",
    "diseño web",
    "e-commerce",
    "sitios institucionales",
    "desarrollo empresarial",
  ],
  authors: [{ name: "LunAgency" }],
  openGraph: {
    title: "LunAgency - Desarrollo Web y Diseño Digital",
    description: "Transformamos ideas en soluciones digitales excepcionales",
    type: "website",
    locale: "es_AR",
  },
  icons: {
    icon: "/ecommerce/luna.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
