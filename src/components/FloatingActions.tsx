import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Navigation, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FloatingActionsProps {
  onOpenOrder: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrder }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#C6A15B] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Bottom Action Bar for Mobile & Desktop */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5">
        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-10 h-10 rounded-full bg-[#1e1e1e]/90 hover:bg-[#C6A15B] text-[#F7F1E7] hover:text-[#111111] border border-white/10 shadow-xl flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Quick action bar */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#181818]/95 backdrop-blur-md border border-[#C6A15B]/30 shadow-2xl">
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Get directions to Five Star Restaurant"
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-[#C9683C] flex items-center justify-center transition-colors"
          >
            <Navigation className="w-4 h-4" />
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            aria-label="Call Five Star Restaurant"
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-[#C6A15B] flex items-center justify-center transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenOrder}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#C6A15B] to-[#d6b776] text-[#111111] font-semibold text-xs tracking-wider flex items-center gap-1.5 shadow-lg shadow-[#C6A15B]/20 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#111111]" />
            <span className="hidden sm:inline">ORDER ONLINE</span>
            <span className="sm:hidden">ORDER</span>
          </button>
        </div>
      </div>
    </>
  );
};
