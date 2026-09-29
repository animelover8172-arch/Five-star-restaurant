import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';

interface OrderOnlineSectionProps {
  onOpenOrder: () => void;
}

export const OrderOnlineSection: React.FC<OrderOnlineSectionProps> = ({ onOpenOrder }) => {
  return (
    <section className="py-24 bg-[#141414] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C6A15B] uppercase">
            Experience In-Person or At Home
          </p>
          <h2 className="font-['DM_Serif_Display'] text-4xl sm:text-6xl text-[#F7F1E7]">
            YOUR TABLE <span className="text-[#C6A15B] italic font-light">OR YOUR DOOR.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D8D0C3]">
            Whether you choose to join us by the outdoor fireplace or enjoy hot tandoori bites from the comfort of home.
          </p>
        </div>

        {/* Two Large Choices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Choice 1: DINE IN */}
          <div className="rounded-3xl bg-[#1b1b1b] border border-[#C6A15B]/30 p-8 sm:p-12 flex flex-col justify-between space-y-6 hover:border-[#C6A15B]/70 transition-all duration-300 shadow-2xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B]">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs tracking-widest uppercase font-semibold text-[#C6A15B]">
                  In-Person Hospitality
                </span>
                <h3 className="font-['DM_Serif_Display'] text-3xl sm:text-4xl text-[#F7F1E7] mt-1">
                  DINE IN
                </h3>
              </div>

              <p className="text-lg text-[#C6A15B] italic font-serif">
                Come sit with us.
              </p>

              <p className="text-xs sm:text-sm text-[#D8D0C3] leading-relaxed">
                Take your seat at our spacious tables, soak in the warm lighting, and let us serve you steaming North Indian curries and appetizers.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-[#111111] bg-[#F7F1E7] hover:bg-[#C6A15B] transition-colors rounded-lg flex items-center justify-center gap-2"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full sm:w-auto px-5 py-3.5 text-xs sm:text-sm font-medium text-[#F7F1E7] bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center gap-2"
              >
                <span>Call Ahead</span>
              </a>
            </div>
          </div>

          {/* Choice 2: ORDER ONLINE */}
          <div className="rounded-3xl bg-[#1b1b1b] border border-[#C9683C]/40 p-8 sm:p-12 flex flex-col justify-between space-y-6 hover:border-[#C9683C] transition-all duration-300 shadow-2xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C9683C]/20 border border-[#C9683C]/40 flex items-center justify-center text-[#C9683C]">
                <ShoppingBag className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs tracking-widest uppercase font-semibold text-[#C9683C]">
                  Doorstep & Drive-Through
                </span>
                <h3 className="font-['DM_Serif_Display'] text-3xl sm:text-4xl text-[#F7F1E7] mt-1">
                  ORDER ONLINE
                </h3>
              </div>

              <p className="text-lg text-[#C9683C] italic font-serif">
                Good food, wherever you are.
              </p>

              <p className="text-xs sm:text-sm text-[#D8D0C3] leading-relaxed">
                Order our signature Chicken Lollipop and kitchen dishes directly for prompt preparation. Pick up curbside or receive contactless delivery.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                onClick={onOpenOrder}
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-[#111111] bg-[#C9683C] hover:bg-[#d97548] text-white transition-colors rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#C9683C]/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>ORDER ONLINE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
