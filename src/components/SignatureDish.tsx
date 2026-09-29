import React from 'react';
import { SIGNATURE_DISH, RESTAURANT_INFO } from '../data/restaurantData';
import { Flame, Sparkles, ShoppingBag, Info } from 'lucide-react';

interface SignatureDishProps {
  onOrderDish: (dishName: string) => void;
}

export const SignatureDish: React.FC<SignatureDishProps> = ({ onOrderDish }) => {
  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#C9683C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#C9683C] font-semibold">
            <Flame className="w-4 h-4 text-[#C9683C]" />
            <span>The Star Attraction</span>
          </div>
          <h2 className="font-['DM_Serif_Display'] text-4xl sm:text-6xl text-[#F7F1E7]">
            THE DISH <span className="text-[#C6A15B] italic font-light">EVERYONE TALKS ABOUT.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D8D0C3]">
            Crafted for crunch, coated in wok-tossed spice, and served sizzling hot.
          </p>
        </div>

        {/* Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto bg-[#181818] rounded-3xl p-6 sm:p-10 border border-[#C6A15B]/30 shadow-2xl">
          {/* Dish Close-up with dynamic frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#C6A15B]/30 shadow-2xl group">
              <img
                src={SIGNATURE_DISH.image}
                alt="Signature Chicken Lollipop dish served at Five Star Restaurant"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#C9683C] text-white shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  House Favorite
                </span>
              </div>
            </div>
          </div>

          {/* Dish Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-3 text-xs text-[#C6A15B] font-semibold tracking-widest uppercase mb-1">
                <span>Non-Veg Appetiser</span>
                <span>·</span>
                <span>Spicy & Crispy</span>
              </div>
              <h3 className="font-['DM_Serif_Display'] text-3xl sm:text-4xl text-[#F7F1E7]">
                {SIGNATURE_DISH.name}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#D8D0C3] leading-relaxed">
              {SIGNATURE_DISH.description}
            </p>

            {/* Editorial highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[#C6A15B] font-bold block mb-0.5">Texture</span>
                <span className="text-[#D8D0C3]">Crispy outer glaze, tender inside</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[#C6A15B] font-bold block mb-0.5">Serving</span>
                <span className="text-[#D8D0C3]">Piping hot with house mint dip</span>
              </div>
            </div>

            {/* Price Transparency Callout */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#222222] border border-[#C6A15B]/20 text-xs text-[#D8D0C3]">
              <Info className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span>
                Fresh daily kitchen preparation · Part of Bhabua’s {RESTAURANT_INFO.priceRange}/person average dining range
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOrderDish(SIGNATURE_DISH.name)}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wider text-[#111111] bg-[#C6A15B] hover:bg-[#d6b776] transition-all rounded-lg shadow-xl shadow-[#C6A15B]/20 flex items-center justify-center gap-2.5 cursor-pointer transform active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ORDER THIS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
