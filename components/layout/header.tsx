'use client';

import Link from 'next/link';
import { Search, ShoppingBag, Menu, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/cart-context';
import { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Header() {
  const { totalItems, setIsOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when dialog opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Main navbar row - all elements on same line */}
        <div className="flex h-20 items-center justify-between">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-xl font-bold uppercase">ShopNest</span>
          </Link>

          {/* Navigation links - Desktop (centered on same row) */}
          <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
            {/* Tab 1: Festive Collection - No dropdown */}
            <Link
              href="/products?category=festive"
              className="text-sm font-medium uppercase transition-colors hover:text-primary"
            >
              Festive Collection
            </Link>

            {/* Tab 2: New Arrivals - With dropdown */}
            <div className="relative group">
              <Link
                href="/products?category=new-arrivals"
                className="text-sm font-medium uppercase transition-colors hover:text-primary"
              >
                New Arrivals
              </Link>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link
                    href="/products?category=breeze-collection"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Breeze Collection
                  </Link>
                  <Link
                    href="/products?category=rangrez-collection"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Rangrez Collection
                  </Link>
                  <Link
                    href="/products?category=kamal-collection"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Kamal Collection
                  </Link>
                  <Link
                    href="/products?category=utsav-collection"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Utsav Collection
                  </Link>
                  <Link
                    href="/products?category=ikat-collection"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Ikat Collection
                  </Link>
                  <Link
                    href="/products?category=azure-collection"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Azure Collection
                  </Link>
                  <Link
                    href="/products?category=suram-collection"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Suram Collection
                  </Link>
                </div>
              </div>
            </div>

            {/* Tab 3: Women's - With dropdown */}
            <div className="relative group">
              <Link
                href="/products?category=womens"
                className="text-sm font-medium uppercase transition-colors hover:text-primary"
              >
                Women's
              </Link>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link
                    href="/products?category=dresses"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Dresses
                  </Link>
                  <Link
                    href="/products?category=co-ord-sets"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Co-ord Sets
                  </Link>
                  <Link
                    href="/products?category=tops"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Tops
                  </Link>
                  <Link
                    href="/products?category=kurta-sets"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Kurta Sets
                  </Link>
                </div>
              </div>
            </div>

            {/* Tab 4: Men's - With dropdown */}
            <div className="relative group">
              <Link
                href="/products?category=mens"
                className="text-sm font-medium uppercase transition-colors hover:text-primary"
              >
                Men's
              </Link>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link
                    href="/products?category=shirts"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Shirts
                  </Link>
                  <Link
                    href="/products?category=kurtas"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Kurtas
                  </Link>
                  <Link
                    href="/products?category=checked-shirts"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Checked Shirts
                  </Link>
                  <Link
                    href="/products?category=solid-shirts"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Solid Shirts
                  </Link>
                  <Link
                    href="/products?category=printed-shirts"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Printed Shirts
                  </Link>
                  <Link
                    href="/products?category=mens-co-ord-sets"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Co-ord Sets
                  </Link>
                </div>
              </div>
            </div>

            {/* Tab 5: Couple's - No dropdown */}
            <Link
              href="/products?category=couples"
              className="text-sm font-medium uppercase transition-colors hover:text-primary"
            >
              Couple's
            </Link>

            {/* Tab 6: Jewelry - No dropdown */}
            <Link
              href="/products?category=jewelry"
              className="text-sm font-medium uppercase transition-colors hover:text-primary"
            >
              Jewelry
            </Link>
          </nav>

          {/* Navigation icons */}
          <div className="flex items-center space-x-2">
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold uppercase">Search Products</h2>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      ref={searchInputRef}
                      type="search"
                      placeholder="Search for products, collections, and more..."
                      className="pl-12 h-12 text-lg"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                    <Link href="/products?category=festive" onClick={() => setIsSearchOpen(false)} className="p-4 border rounded-lg hover:bg-accent transition-colors">
                      <div className="text-center">
                        <span className="text-3xl mb-2">✨</span>
                        <p className="text-sm font-medium uppercase">Festive</p>
                      </div>
                    </Link>
                    <Link href="/products?category=womens" onClick={() => setIsSearchOpen(false)} className="p-4 border rounded-lg hover:bg-accent transition-colors">
                      <div className="text-center">
                        <span className="text-3xl mb-2">👗</span>
                        <p className="text-sm font-medium uppercase">Women's</p>
                      </div>
                    </Link>
                    <Link href="/products?category=mens" onClick={() => setIsSearchOpen(false)} className="p-4 border rounded-lg hover:bg-accent transition-colors">
                      <div className="text-center">
                        <span className="text-3xl mb-2">👔</span>
                        <p className="text-sm font-medium uppercase">Men's</p>
                      </div>
                    </Link>
                    <Link href="/products?category=jewelry" onClick={() => setIsSearchOpen(false)} className="p-4 border rounded-lg hover:bg-accent transition-colors">
                      <div className="text-center">
                        <span className="text-3xl mb-2">💎</span>
                        <p className="text-sm font-medium uppercase">Jewelry</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/products?category=festive"
              className="block py-2 text-sm font-medium uppercase transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Festive Collection
            </Link>

            {/* New Arrivals dropdown for mobile */}
            <div>
              <button
                className="w-full py-2 text-sm font-medium uppercase transition-colors hover:text-primary text-left"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                New Arrivals
              </button>
              {isMenuOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    href="/products?category=breeze-collection"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Breeze Collection
                  </Link>
                  <Link
                    href="/products?category=rangrez-collection"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Rangrez Collection
                  </Link>
                  <Link
                    href="/products?category=kamal-collection"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kamal Collection
                  </Link>
                  <Link
                    href="/products?category=utsav-collection"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Utsav Collection
                  </Link>
                  <Link
                    href="/products?category=ikat-collection"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ikat Collection
                  </Link>
                  <Link
                    href="/products?category=azure-collection"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Azure Collection
                  </Link>
                  <Link
                    href="/products?category=suram-collection"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Suram Collection
                  </Link>
                </div>
              )}
            </div>

            {/* Women's dropdown for mobile */}
            <div>
              <button
                className="w-full py-2 text-sm font-medium uppercase transition-colors hover:text-primary text-left"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Women's
              </button>
              {isMenuOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    href="/products?category=dresses"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dresses
                  </Link>
                  <Link
                    href="/products?category=co-ord-sets"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Co-ord Sets
                  </Link>
                  <Link
                    href="/products?category=tops"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tops
                  </Link>
                  <Link
                    href="/products?category=kurta-sets"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kurta Sets
                  </Link>
                </div>
              )}
            </div>

            {/* Men's dropdown for mobile */}
            <div>
              <button
                className="w-full py-2 text-sm font-medium uppercase transition-colors hover:text-primary text-left"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Men's
              </button>
              {isMenuOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    href="/products?category=shirts"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shirts
                  </Link>
                  <Link
                    href="/products?category=kurtas"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kurtas
                  </Link>
                  <Link
                    href="/products?category=checked-shirts"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Checked Shirts
                  </Link>
                  <Link
                    href="/products?category=solid-shirts"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Solid Shirts
                  </Link>
                  <Link
                    href="/products?category=printed-shirts"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Printed Shirts
                  </Link>
                  <Link
                    href="/products?category=mens-co-ord-sets"
                    className="block py-2 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Co-ord Sets
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/products?category=couples"
              className="block py-2 text-sm font-medium uppercase transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Couple's
            </Link>

            <Link
              href="/products?category=jewelry"
              className="block py-2 text-sm font-medium uppercase transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Jewelry
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
