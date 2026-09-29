import React from 'react';

export const HeroTransition: React.FC = () => {
  return (
    <section className="py-24 bg-[#111111] overflow-hidden relative border-b border-[#C6A15B]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-medium">
            Philosophy of the House
          </p>

          <h2 className="font-['DM_Serif_Display'] text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#F7F1E7] leading-none">
            FOOD <span className="text-[#C9683C] italic font-light">FIRST.</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 text-xl sm:text-3xl md:text-4xl font-['DM_Serif_Display'] text-[#D8D0C3]/70">
            <span className="hover:text-[#F7F1E7] transition-colors">Ambience.</span>
            <span className="text-[#C6A15B] text-xl" aria-hidden="true">✦</span>
            <span className="hover:text-[#F7F1E7] transition-colors">Company.</span>
            <span className="text-[#C6A15B] text-xl" aria-hidden="true">✦</span>
            <span className="hover:text-[#F7F1E7] transition-colors">Conversation.</span>
          </div>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#D8D0C3]/70 pt-6 font-light leading-relaxed">
            In Bhabua, dining is never a solitary transaction. It is an invitation to pause, pass the platters, and celebrate ordinary days together.
          </p>
        </div>
      </div>
    </section>
  );
};
