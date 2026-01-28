'use client';

import { useState, useEffect } from 'react';

const promotionalTexts = [
  'Get 10% off on your first prompt code CODE10',
  'SUVASH FASION IS NOW ON YASHNIRA',
  'FREE WORLDWIDE SHIPPING',
];

export default function PromotionalBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotionalTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <p className="text-sm font-medium uppercase tracking-wider">
            {promotionalTexts[currentIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}
