import React from 'react';
import { ArrowRight, Star, Utensils, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_INFO, RESTAURANT_IMAGES } from '../data/restaurantData';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-[#111111] bg-grain">
      {/* Background warm ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C9683C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30352C]/60 border border-[#C6A15B]/30 text-xs font-semibold tracking-widest text-[#C6A15B] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{RESTAURANT_INFO.locationBadge}</span>
            </div>

            {/* Large headline */}
            <div className="space-y-2">
              <h1 className="font-['DM_Serif_Display'] text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-normal tracking-tight text-[#F7F1E7] leading-[1.05]">
                COME HUNGRY.
                <span className="block italic text-[#C6A15B] font-light">LEAVE HAPPY.</span>
              </h1>
              <p className="font-['Space_Grotesk'] text-lg sm:text-xl text-[#D8D0C3] font-light pt-2 max-w-xl">
                Good food, warm ambience and a table made for sharing.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="px-7 py-3.5 text-sm font-semibold tracking-wider text-[#111111] bg-[#F7F1E7] hover:bg-[#C6A15B] transition-all rounded-lg shadow-xl shadow-black/40 flex items-center gap-2 group cursor-pointer"
              >
                <span>EXPLORE MENU</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenOrder}
                className="px-7 py-3.5 text-sm font-semibold tracking-wider text-[#F7F1E7] bg-transparent hover:bg-white/5 border border-[#C6A15B]/50 hover:border-[#C6A15B] transition-all rounded-lg flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Utensils className="w-4 h-4 text-[#C6A15B]" />
                <span>ORDER ONLINE</span>
              </button>
            </div>

            {/* Quick Location Hint */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#D8D0C3]/70">
              <MapPin className="w-4 h-4 text-[#C9683C] shrink-0" />
              <span>Front of Devi Ji Mandir, Mahakaleshwar Plaza Rd, Akhalashpur, Bhabua</span>
            </div>
          </div>

          {/* Right Column: Large Cinematic Food Showcase + Floating Honest Metrics */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Rounded image container with luxury border & warm shadow */}
              <div className="relative rounded-3xl overflow-hidden border border-[#C6A15B]/30 shadow-2xl shadow-black/80 aspect-[4/3] sm:aspect-[16/11] group">
                <img
                  src={RESTAURANT_IMAGES.hero}
                  alt="Five Star Restaurant Indian dining feast featuring rich curries, tandoori items and garlic naan on a rustic wooden table"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />

                {/* Subtle Image Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    Fresh Tandoor & Curries
                  </span>
                  <span className="text-[#C6A15B] italic font-serif">
                    The Table Experience
                  </span>
                </div>
              </div>

              {/* Floating Information Pill 1: Honest Google Rating (3.7 ★) */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-[#181818]/95 backdrop-blur-md border border-[#C6A15B]/40 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center gap-3 transform hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-[#C9683C]/20 border border-[#C9683C]/40 flex items-center justify-center text-[#C9683C]">
                  <Star className="w-5 h-5 fill-[#C9683C]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-[#F7F1E7]">
                      {RESTAURANT_INFO.rating}
                    </span>
                    <span className="text-xs text-[#C6A15B] font-semibold">★</span>
                  </div>
                  <p className="text-[10px] tracking-wider uppercase text-[#D8D0C3]/80 font-medium">
                    {RESTAURANT_INFO.reviewsCount} Google Reviews
                  </p>
                </div>
              </div>

              {/* Floating Information Pill 2: Price Range */}
              <div className="absolute -bottom-5 right-2 sm:right-4 bg-[#181818]/95 backdrop-blur-md border border-[#C6A15B]/40 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center gap-3 transform hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] font-bold text-sm">
                  ₹
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold font-['Space_Grotesk'] text-[#F7F1E7]">
                    {RESTAURANT_INFO.priceRange}
                  </p>
                  <p className="text-[10px] tracking-wider uppercase text-[#D8D0C3]/80 font-medium">
                    Per Person Range
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
