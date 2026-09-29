import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, ShoppingBag, Phone, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Live calculation of restaurant hours
    const checkOpenStatus = () => {
      const now = new Date();
      // Calculate current minutes since midnight
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const openMinutes = RESTAURANT_INFO.openingHour * 60 + RESTAURANT_INFO.openingMinute;
      const closeMinutes = RESTAURANT_INFO.closingHour * 60 + RESTAURANT_INFO.closingMinute;
      setIsOpenNow(currentMinutes >= openMinutes && currentMinutes <= closeMinutes);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/90 backdrop-blur-md border-b border-[#C6A15B]/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#111111]/90 via-[#111111]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none"
            aria-label="Five Star Restaurant home"
          >
            <span className="font-['DM_Serif_Display'] text-2xl sm:text-3xl tracking-wider text-[#F7F1E7] group-hover:text-[#C6A15B] transition-colors leading-none">
              FIVE STAR
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#C6A15B] uppercase font-semibold mt-1">
              RESTAURANT • BHABUA
            </span>
          </a>

          {/* Zone 2: Navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F7F1E7]/80">
            <a href="#hero" className="hover:text-[#C6A15B] transition-colors">
              Home
            </a>
            <a href="#menu" className="hover:text-[#C6A15B] transition-colors">
              Menu
            </a>
            <a href="#table-experience" className="hover:text-[#C6A15B] transition-colors">
              Experience
            </a>
            <a href="#after-dark" className="hover:text-[#C6A15B] transition-colors">
              After Dark
            </a>
            <a href="#reviews" className="hover:text-[#C6A15B] transition-colors">
              Reviews
            </a>
            <a href="#gallery" className="hover:text-[#C6A15B] transition-colors">
              Gallery
            </a>
            <a href="#location" className="hover:text-[#C6A15B] transition-colors">
              Location
            </a>
          </nav>

          {/* Zone 3: Live Status & Primary Action */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Live Restaurant Status */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b1b1b] border border-[#C6A15B]/30 text-xs">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="text-[#D8D0C3]">
                {isOpenNow ? 'Open · Closes 10:30 PM' : 'Opens 11:00 AM'}
              </span>
            </div>

            <button
              onClick={onOpenOrder}
              className="flex items-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-[#111111] bg-gradient-to-r from-[#C6A15B] to-[#d6b776] hover:from-[#d6b776] hover:to-[#C6A15B] transition-all rounded-md shadow-lg shadow-[#C6A15B]/20 transform active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#111111]" />
              <span>ORDER</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#F7F1E7] hover:text-[#C6A15B] rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#111111]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 text-center">
            <div className="mb-2">
              <span className="font-['DM_Serif_Display'] text-3xl text-[#C6A15B]">FIVE STAR</span>
              <p className="text-xs text-[#D8D0C3] tracking-widest mt-1">फाइव स्टार रेस्टोरेंट</p>
            </div>

            <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white/5 border border-white/10 text-xs mx-auto">
              <Clock className="w-4 h-4 text-[#C6A15B]" />
              <span className="text-[#F7F1E7]">
                {isOpenNow ? 'Open Now · Closes 10:30 PM' : 'Closed · Opens 11:00 AM'}
              </span>
            </div>

            <nav className="flex flex-col gap-5 text-lg font-medium text-[#F7F1E7]">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C6A15B] transition-colors py-1"
              >
                Home
              </a>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C6A15B] transition-colors py-1"
              >
                Explore Menu
              </a>
              <a
                href="#table-experience"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C6A15B] transition-colors py-1"
              >
                The Table Experience
              </a>
              <a
                href="#after-dark"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C6A15B] transition-colors py-1"
              >
                Five Star After Dark
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C6A15B] transition-colors py-1"
              >
                Google Reviews (3.7 ★)
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C6A15B] transition-colors py-1"
              >
                Atmosphere Gallery
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C6A15B] transition-colors py-1"
              >
                Find Location
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3.5 px-4 text-center font-semibold text-[#111111] bg-[#C6A15B] rounded-lg tracking-wide shadow-lg"
            >
              ORDER ONLINE / RESERVE TABLE
            </button>
            <div className="flex gap-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-3 text-xs font-medium text-[#F7F1E7] bg-white/5 border border-white/10 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#C6A15B]" />
                Call Restaurant
              </a>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-3 text-xs font-medium text-[#F7F1E7] bg-white/5 border border-white/10 rounded-lg"
              >
                <MapPin className="w-4 h-4 text-[#C9683C]" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
