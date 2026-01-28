import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import PromotionalBanner from "@/components/layout/promotional-banner";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CartSidebarWrapper from "@/components/cart/cart-sidebar-wrapper";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ShopNest - Your Premium E-commerce Destination",
  description: "Discover quality products at unbeatable prices. Shop electronics, fashion, home goods, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <PromotionalBanner />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CartSidebarWrapper />
        </CartProvider>
      </body>
    </html>
  );
}
