'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/product-card';
import { products } from '@/lib/data';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop',
    title: 'Discover Your Style',
    subtitle: 'Premium fashion for every occasion',
  },
  {
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop',
    title: 'New Arrivals',
    subtitle: 'Explore our latest collection',
  },
  {
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop',
    title: 'Summer Collection',
    subtitle: 'Beat the heat in style',
  },
];

export default function HomePage() {
  const [activeSummerTab, setActiveSummerTab] = useState<'breeze' | 'rangrez'>('breeze');
  const [activeFestiveTab, setActiveFestiveTab] = useState<'kamal' | 'utsav'>('kamal');
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  // Auto-rotate hero images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const breezeProducts = products.filter(p => p.subcategory === 'Breeze Collection').slice(0, 4);
  const rangrezProducts = products.filter(p => p.subcategory === 'Rangrez Collection').slice(0, 4);
  const kamalProducts = products.filter(p => p.subcategory === 'Kamal Collection').slice(0, 4);
  const utsavProducts = products.filter(p => p.subcategory === 'Utsav Collection').slice(0, 4);

  const getActiveSummerProducts = () => {
    return activeSummerTab === 'breeze' ? breezeProducts : rangrezProducts;
  };

  const getActiveFestiveProducts = () => {
    return activeFestiveTab === 'kamal' ? kamalProducts : utsavProducts;
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        {/* Background Image with Fade Transition */}
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentHeroImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {heroImages[currentHeroImage].title}
            </h1>
            <p className="text-xl md:text-3xl mb-8 text-purple-100 animate-fade-in">
              {heroImages[currentHeroImage].subtitle}
            </p>
            <Link href="/products">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentHeroImage ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Summer Collection Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Summer Collection</h2>
          
          {/* Subcategory Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveSummerTab('breeze')}
              className={`px-8 py-3 text-lg font-semibold rounded-lg transition-all ${
                activeSummerTab === 'breeze'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Breeze
            </button>
            <button
              onClick={() => setActiveSummerTab('rangrez')}
              className={`px-8 py-3 text-lg font-semibold rounded-lg transition-all ${
                activeSummerTab === 'rangrez'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Rangrez
            </button>
          </div>

          {/* Active Tab Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {getActiveSummerProducts().map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Link href={`/products?subcategory=${activeSummerTab === 'breeze' ? 'breeze-collection' : 'rangrez-collection'}`}>
              <Button variant="outline" size="lg">
                View More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Festive Collection Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Festive Collection</h2>
          
          {/* Subcategory Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFestiveTab('kamal')}
              className={`px-8 py-3 text-lg font-semibold rounded-lg transition-all ${
                activeFestiveTab === 'kamal'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Kamal
            </button>
            <button
              onClick={() => setActiveFestiveTab('utsav')}
              className={`px-8 py-3 text-lg font-semibold rounded-lg transition-all ${
                activeFestiveTab === 'utsav'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Utsav
            </button>
          </div>

          {/* Active Tab Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {getActiveFestiveProducts().map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Link href={`/products?subcategory=${activeFestiveTab === 'kamal' ? 'kamal-collection' : 'utsav-collection'}`}>
              <Button variant="outline" size="lg">
                View More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-lg mb-8 text-purple-100">
            Get exclusive offers and updates on new arrivals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg text-gray-900 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <Button size="lg" className="bg-purple-900 hover:bg-purple-800">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
