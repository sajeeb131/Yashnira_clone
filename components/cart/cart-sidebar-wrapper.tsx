'use client';

import { useCart } from "@/context/cart-context";
import CartSidebar from "./cart-sidebar";

export default function CartSidebarWrapper() {
  const { isOpen } = useCart();
  return isOpen ? <CartSidebar /> : null;
}
