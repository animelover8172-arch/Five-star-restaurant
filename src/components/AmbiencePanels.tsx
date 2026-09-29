import React from 'react';
import { Trees, Flame, UtensilsCrossed, Sparkles } from 'lucide-react';

export const AmbiencePanels: React.FC = () => {
  const panels = [
    {
      id: 'outdoor',
      icon: Trees,
      tag: 'Verified Amenity',
      title: 'OUTDOOR SEATING',
      description: 'Enjoy the restaurant atmosphere beyond the traditional indoor table. Feel the open breeze under Bhabua’s evening sky with comfortable, spacious seating for family feasts and casual catch-ups.',
      accent: 'border-[#30352C] bg-[#1a1c18]',
      highlight: 'Open-air dining & breeze'
    },
    {
      id: 'fireplace',
      icon: Flame,
      tag: 'Verified Amenity',
      title: 'FIREPLACE',
      description: 'Create a warm visual around the fireplace experience. On crisp evenings, our fireplace provides radiant warmth and a rustic glow that transforms an ordinary meal into an intimate night gathering.',
      accent: 'border-[#C9683C]/40 bg-[#1c1613]',
      highlight: 'Cozy hearth & crackling warmth'
    },
    {
      id: 'all-you-can-eat',
      icon: UtensilsCrossed,
      tag: 'Verified Service',
      title: 'ALL YOU CAN EAT',
      description: 'Enjoy generous portions when available. Note: This dining format is subject to daily kitchen scheduling and active seasonal confirmation upon arrival. Please ask your host server for details.',
      accent: 'border-[#C6A15B]/30 bg-[#181818]',
      highlight: 'Subject to active confirmation'
    }
  ];

  return (
    <section className="py-24 bg-[#111111] relative border-b border-[#C6A15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C6A15B] uppercase">
            Distinctive Features
          </p>
          <h2 className="font-['DM_Serif_Display'] text-4xl sm:text-6xl text-[#F7F1E7]">
            DESIGNED FOR <span className="text-[#C6A15B] italic font-light">EVERY MOMENT.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D8D0C3]">
            Verified dining amenities curated to elevate your visit to Five Star Restaurant in Akhalashpur.
          </p>
        </div>

        {/* 3 Large Horizontal Panels */}
        <div className="space-y-6">
          {panels.map((panel, idx) => {
            const Icon = panel.icon;
            return (
              <div
                key={panel.id}
                className={`rounded-3xl p-6 sm:p-10 border transition-all duration-300 hover:border-[#C6A15B]/60 shadow-xl ${panel.accent} group`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-4 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C6A15B] shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest text-[#C6A15B] uppercase font-bold block mb-1">
                        0{idx + 1} · {panel.tag}
                      </span>
                      <h3 className="font-['DM_Serif_Display'] text-2xl sm:text-3xl text-[#F7F1E7]">
                        {panel.title}
                      </h3>
                    </div>
                  </div>

                  <div className="md:col-span-6">
                    <p className="text-xs sm:text-sm text-[#D8D0C3] leading-relaxed">
                      {panel.description}
                    </p>
                  </div>

                  <div className="md:col-span-2 flex justify-start md:justify-end">
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-[#C6A15B] whitespace-nowrap">
                      {panel.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
