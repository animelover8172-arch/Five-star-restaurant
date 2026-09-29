import React, { useState } from 'react';
import { TABLE_HOTSPOTS, RESTAURANT_IMAGES } from '../data/restaurantData';
import { Sparkles, Info, X } from 'lucide-react';

export const FiveStarTable: React.FC = () => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('food');

  const activeHotspot = TABLE_HOTSPOTS.find((h) => h.id === activeHotspotId) || TABLE_HOTSPOTS[0];

  return (
    <section id="table-experience" className="py-24 bg-[#141414] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C6A15B] uppercase">
            Signature Concept
          </p>
          <h2 className="font-['DM_Serif_Display'] text-4xl sm:text-6xl text-[#F7F1E7]">
            ONE TABLE. <span className="text-[#C6A15B] italic font-light">MANY STORIES.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D8D0C3]">
            More than just dining furniture — the Five Star Table is where flavours meet, conversations start, and time slows down. Tap the hotspots to explore each dimension.
          </p>
        </div>

        {/* Hotspot Pills for quick access / touch devices */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {TABLE_HOTSPOTS.map((h) => {
            const isActive = activeHotspotId === h.id;
            return (
              <button
                key={h.id}
                onClick={() => setActiveHotspotId(h.id)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C6A15B] text-[#111111] shadow-lg shadow-[#C6A15B]/20 scale-105'
                    : 'bg-[#1f1f1f] text-[#F7F1E7] border border-white/10 hover:border-[#C6A15B]/50'
                }`}
              >
                {h.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Overhead Table Canvas Container */}
        <div className="relative rounded-3xl overflow-hidden border border-[#C6A15B]/30 shadow-2xl bg-black max-w-5xl mx-auto aspect-[16/9] sm:aspect-[16/10]">
          <img
            src={RESTAURANT_IMAGES.tableOverhead}
            alt="Overhead flat-lay photograph of a dining feast at Five Star Restaurant"
            className="w-full h-full object-cover object-center filter brightness-90 hover:brightness-100 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

          {/* Interactive Hotspot pins positioned across the overhead table */}
          {TABLE_HOTSPOTS.map((hotspot) => {
            const isActive = activeHotspotId === hotspot.id;
            return (
              <button
                key={hotspot.id}
                onClick={() => setActiveHotspotId(hotspot.id)}
                style={{ top: `${hotspot.yPercent}%`, left: `${hotspot.xPercent}%` }}
                aria-label={`Hotspot for ${hotspot.label}`}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer p-2 focus:outline-none`}
              >
                <div className="relative flex items-center justify-center">
                  {/* Pulsing ring */}
                  <span
                    className={`absolute w-10 h-10 rounded-full animate-ping opacity-75 ${
                      isActive ? 'bg-[#C6A15B]' : 'bg-white/40'
                    }`}
                  />
                  {/* Pin core */}
                  <div
                    className={`relative w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all shadow-xl ${
                      isActive
                        ? 'bg-[#C6A15B] text-[#111111] border-white scale-125'
                        : 'bg-[#111111]/90 text-[#F7F1E7] border-[#C6A15B] group-hover:scale-110'
                    }`}
                  >
                    <span>{hotspot.label.charAt(0)}</span>
                  </div>
                  {/* Label badge */}
                  <span
                    className={`hidden sm:block absolute top-9 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase whitespace-nowrap shadow-md transition-all ${
                      isActive
                        ? 'bg-[#C6A15B] text-[#111111]'
                        : 'bg-black/80 text-white/90 border border-white/10 group-hover:bg-white group-hover:text-black'
                    }`}
                  >
                    {hotspot.label}
                  </span>
                </div>
              </button>
            );
          })}

          {/* Active Hotspot Reveal Card Overlay at bottom */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md bg-[#181818]/95 backdrop-blur-md border border-[#C6A15B]/50 p-5 rounded-2xl shadow-2xl z-30 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#C6A15B] text-[#111111] uppercase tracking-wider">
                  {activeHotspot.label}
                </span>
                <span className="text-xs text-[#D8D0C3] font-medium">The Dimension</span>
              </div>
              <Sparkles className="w-4 h-4 text-[#C6A15B] shrink-0" />
            </div>

            <h3 className="font-['DM_Serif_Display'] text-xl text-[#F7F1E7] mt-2">
              {activeHotspot.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#D8D0C3] mt-1.5 leading-relaxed">
              {activeHotspot.description}
            </p>

            {activeHotspot.quote && (
              <p className="mt-3 pt-2.5 border-t border-white/10 text-xs italic text-[#C6A15B] font-serif">
                {activeHotspot.quote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
