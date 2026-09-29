import React, { useState } from 'react';
import { MENU_CATEGORIES, SIGNATURE_DISH, CATEGORY_NOTES, RESTAURANT_INFO } from '../data/restaurantData';
import { ShoppingBag, Sparkles, ChefHat, Phone, Plus } from 'lucide-react';

interface DigitalMenuProps {
  onOrderDish: (dishName: string) => void;
}

export const DigitalMenu: React.FC<DigitalMenuProps> = ({ onOrderDish }) => {
  const [activeCategory, setActiveCategory] = useState<string>('starters');

  const currentCategoryMeta = CATEGORY_NOTES[activeCategory] || CATEGORY_NOTES.starters;

  return (
    <section id="menu" className="py-24 bg-[#141414] relative border-t border-[#C6A15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C6A15B] uppercase">
            Curated Kitchen Selections
          </p>
          <h2 className="font-['DM_Serif_Display'] text-4xl sm:text-6xl text-[#F7F1E7]">
            EDITORIAL <span className="text-[#C6A15B] italic font-light">DIGITAL MENU.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D8D0C3]">
            Authentic preparations made fresh in Bhabua. Browse by culinary section and order directly to your table or doorstep.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#C6A15B] text-[#111111] shadow-lg shadow-[#C6A15B]/20 scale-105 font-bold'
                    : 'bg-[#1e1e1e] text-[#D8D0C3] hover:text-[#F7F1E7] hover:bg-[#252525] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Category Canvas */}
        <div className="bg-[#191919] rounded-3xl border border-[#C6A15B]/20 p-6 sm:p-10 shadow-2xl space-y-10">
          {/* Category Editorial Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs tracking-widest text-[#C6A15B] uppercase font-semibold">
                Category Overview
              </span>
              <h3 className="font-['DM_Serif_Display'] text-3xl sm:text-4xl text-[#F7F1E7] mt-1">
                {MENU_CATEGORIES.find((c) => c.id === activeCategory)?.label}
              </h3>
              <p className="text-xs sm:text-sm text-[#D8D0C3] mt-1 max-w-xl">
                {currentCategoryMeta.summary}
              </p>
            </div>

            <div className="text-xs text-[#D8D0C3]/80 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-[#C6A15B]" />
              <span>Prepared fresh upon order in our Bhabua kitchen</span>
            </div>
          </div>

          {/* Dishes Display for Selected Category */}
          {activeCategory === 'starters' || activeCategory === 'non-veg' ? (
            <div className="space-y-6">
              <div className="text-xs text-[#C6A15B] font-semibold uppercase tracking-wider">
                Featured Verified Selection
              </div>

              {/* Verified Signature Dish: Chicken Lollipop */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#202020] rounded-2xl p-5 sm:p-6 border border-[#C6A15B]/30 hover:border-[#C6A15B]/60 transition-all">
                <div className="md:col-span-4 rounded-xl overflow-hidden aspect-[4/3] bg-black">
                  <img
                    src={SIGNATURE_DISH.image}
                    alt={SIGNATURE_DISH.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="md:col-span-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-['DM_Serif_Display'] text-2xl text-[#F7F1E7]">
                        {SIGNATURE_DISH.name}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#C9683C] text-white uppercase tracking-wider">
                        Signature Dish
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#D8D0C3] mt-2 leading-relaxed">
                      {SIGNATURE_DISH.description}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs text-[#C6A15B] italic font-serif">
                      <span>• Non-Veg Specialty</span>
                      <span>• Hand-tossed spice glaze</span>
                      <span>• Mint Dip & Onion rings</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10">
                    <span className="text-xs text-[#D8D0C3]">
                      Price: <strong className="text-[#F7F1E7]">Daily Kitchen Rate</strong> (Avg. meal ₹200–₹1,000/person)
                    </span>

                    <button
                      onClick={() => onOrderDish(SIGNATURE_DISH.name)}
                      className="px-5 py-2.5 text-xs font-semibold tracking-wider text-[#111111] bg-[#C6A15B] hover:bg-[#d6b776] transition-all rounded-lg flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order Dish</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Kitchen Inquire / Custom Ordering Prompt */}
              <div className="p-6 rounded-2xl bg-white/5 border border-dashed border-[#C6A15B]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h5 className="font-['DM_Serif_Display'] text-lg text-[#F7F1E7]">
                    More Fresh Specials Available Daily
                  </h5>
                  <p className="text-xs text-[#D8D0C3]">
                    Additional {MENU_CATEGORIES.find((c) => c.id === activeCategory)?.label.toLowerCase()} dishes rotate daily based on fresh market produce.
                  </p>
                </div>
                <button
                  onClick={() => onOrderDish(`Daily ${MENU_CATEGORIES.find((c) => c.id === activeCategory)?.label} Special`)}
                  className="px-5 py-2.5 text-xs font-medium text-[#F7F1E7] bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Inquire / Order Daily Special</span>
                </button>
              </div>
            </div>
          ) : (
            /* Editorial Placeholder for other categories where exact dishes are rotated daily */
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-[#202020] border border-[#C6A15B]/20 text-center space-y-4 max-w-2xl mx-auto">
                <div className="w-12 h-12 rounded-full bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center mx-auto">
                  <ChefHat className="w-6 h-6" />
                </div>
                <h4 className="font-['DM_Serif_Display'] text-2xl text-[#F7F1E7]">
                  Fresh Daily {MENU_CATEGORIES.find((c) => c.id === activeCategory)?.label}
                </h4>
                <p className="text-xs sm:text-sm text-[#D8D0C3] leading-relaxed">
                  Our kitchen prepares seasonal varieties daily. In compliance with verified factual details, we do not invent fake dish listings or prices. Call our kitchen or order online to get today’s live options!
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => onOrderDish(`Daily ${MENU_CATEGORIES.find((c) => c.id === activeCategory)?.label} Selection`)}
                    className="px-6 py-2.5 text-xs font-semibold tracking-wider text-[#111111] bg-[#C6A15B] hover:bg-[#d6b776] rounded-lg transition-colors cursor-pointer"
                  >
                    Order from this Category
                  </button>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="px-5 py-2.5 text-xs font-medium text-[#F7F1E7] bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Call Kitchen: {RESTAURANT_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
