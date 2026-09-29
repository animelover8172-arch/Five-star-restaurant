import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Users, Info, Sparkles, Check } from 'lucide-react';

export const PriceSection: React.FC = () => {
  const [diners, setDiners] = useState<number>(2);

  const minTotal = diners * 200;
  const maxTotal = diners * 1000;

  return (
    <section className="py-24 bg-[#141414] relative overflow-hidden border-b border-[#C6A15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Big Editorial Typography */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C6A15B] uppercase block">
              Transparent Dining
            </span>

            <h2 className="font-['DM_Serif_Display'] text-5xl sm:text-6xl md:text-7xl text-[#F7F1E7] leading-none">
              GOOD FOOD.
              <span className="block text-[#C6A15B] italic font-light">HONEST PRICES.</span>
            </h2>

            {/* Giant price display with animated typography flair */}
            <div className="py-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-['Space_Grotesk'] font-bold text-[#F7F1E7] tracking-tight">
                ₹200 — ₹1,000 <span className="text-xl sm:text-2xl text-[#C6A15B] font-normal">/ PERSON</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs text-[#D8D0C3]/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                <span className="uppercase tracking-widest font-medium">
                  {RESTAURANT_INFO.priceLabel}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D8D0C3] leading-relaxed max-w-lg">
              We believe in honest local dining without surprise costs. Whether visiting for a quick snack with Chicken Lollipop or a full multi-course family dinner, our menu accommodates diverse budgets.
            </p>

            <div className="flex items-center gap-2 p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-[#D8D0C3]">
              <Info className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span>
                Note: Individual dish prices vary according to portion sizes and ingredients.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Group Budget Estimator */}
          <div className="lg:col-span-6 bg-[#1a1a1a] rounded-3xl p-6 sm:p-10 border border-[#C6A15B]/30 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#C6A15B]" />
                <h3 className="font-['DM_Serif_Display'] text-xl text-[#F7F1E7]">
                  Group Dining Estimator
                </h3>
              </div>
              <span className="text-xs text-[#C6A15B] font-mono">Bhabua Diners</span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#D8D0C3]">Number of Diners</span>
                <span className="text-base font-bold text-[#F7F1E7] font-['Space_Grotesk']">
                  {diners} {diners === 1 ? 'Person' : 'People'}
                </span>
              </div>

              {/* Slider for group size */}
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={diners}
                onChange={(e) => setDiners(parseInt(e.target.value))}
                className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer accent-[#C6A15B]"
              />

              <div className="flex justify-between text-[10px] text-[#D8D0C3]/60 font-mono">
                <span>1 Diner</span>
                <span>2</span>
                <span>4</span>
                <span>6</span>
                <span>8+ Diners</span>
              </div>
            </div>

            {/* Estimated Output */}
            <div className="p-5 rounded-2xl bg-[#222222] border border-[#C6A15B]/20 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-semibold block">
                Estimated Table Range
              </span>
              <div className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-[#F7F1E7]">
                ₹{minTotal.toLocaleString()} — ₹{maxTotal.toLocaleString()}
              </div>
              <p className="text-[11px] text-[#D8D0C3]/80 pt-1">
                Typical range for {diners} guest{diners > 1 ? 's' : ''} covering appetizers, curries, breads and beverages.
              </p>
            </div>

            <div className="space-y-2 pt-2 text-xs text-[#D8D0C3]">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>No hidden cover charge for outdoor or fireplace seating</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Drive-through & takeaway available at standard rates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
