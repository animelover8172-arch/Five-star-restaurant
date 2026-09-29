import React, { useState } from 'react';
import { Sun, Sunset, Moon, Sparkles, Clock } from 'lucide-react';
import { RESTAURANT_IMAGES } from '../data/restaurantData';

type TimePhase = 'day' | 'evening' | 'night';

export const AfterDark: React.FC = () => {
  const [activePhase, setActivePhase] = useState<TimePhase>('night');

  const phases = [
    {
      id: 'day' as TimePhase,
      label: 'Day',
      timeSpan: '11:00 AM – 4:00 PM',
      icon: Sun,
      headline: 'GOOD FOOD. BRIGHT DAYS.',
      subtitle: 'Sunlit lunches, comforting thalis, quick business breaks, and fresh afternoon beverages.',
      bgClass: 'bg-[#F7F1E7] text-[#111111]',
      accentColor: '#C9683C',
      atmosphere: 'Warm cream daylight with crisp daylight ambience.',
      image: RESTAURANT_IMAGES.hero
    },
    {
      id: 'evening' as TimePhase,
      label: 'Sunset',
      timeSpan: '4:00 PM – 7:30 PM',
      icon: Sunset,
      headline: 'DINNER STARTS HERE.',
      subtitle: 'Golden hour arrivals, sizzling tandoor platters, and friends gathering after work.',
      bgClass: 'bg-[#291711] text-[#F7F1E7]',
      accentColor: '#C9683C',
      atmosphere: 'Burnt orange twilight glow with aromatic grill smoke.',
      image: RESTAURANT_IMAGES.chickenLollipop
    },
    {
      id: 'night' as TimePhase,
      label: 'Night',
      timeSpan: '7:30 PM – 10:30 PM',
      icon: Moon,
      headline: 'STAY FOR THE MOMENTS.',
      subtitle: 'Midnight charcoal ambience, crackling outdoor fireplace, and shared laughter until closing.',
      bgClass: 'bg-[#111111] text-[#F7F1E7]',
      accentColor: '#C6A15B',
      atmosphere: 'Deep charcoal night with lantern glow and warm fireplace embers.',
      image: RESTAURANT_IMAGES.nightAmbience
    }
  ];

  const current = phases.find((p) => p.id === activePhase) || phases[2];

  return (
    <section
      id="after-dark"
      className={`py-24 transition-colors duration-700 relative overflow-hidden ${
        activePhase === 'day'
          ? 'bg-[#F7F1E7] text-[#111111]'
          : activePhase === 'evening'
          ? 'bg-[#21140e] text-[#F7F1E7]'
          : 'bg-[#0e0e0e] text-[#F7F1E7]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A15B]">
            Interactive Lighting Experience
          </p>
          <h2 className="font-['DM_Serif_Display'] text-4xl sm:text-6xl">
            FIVE STAR <span className="italic font-light text-[#C9683C]">AFTER DARK.</span>
          </h2>
          <p className="text-sm sm:text-base opacity-80">
            Witness how our dining atmosphere transforms through the hours in Bhabua. Toggle below to change the light and mood.
          </p>
        </div>

        {/* Phase Switcher Buttons */}
        <div className="flex items-center justify-center gap-3 mb-12 max-w-md mx-auto">
          {phases.map((phase) => {
            const Icon = phase.icon;
            const isActive = activePhase === phase.id;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#C6A15B] text-[#111111] shadow-xl scale-105'
                    : activePhase === 'day'
                    ? 'bg-black/5 text-[#111111]/70 hover:bg-black/10'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{phase.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cinematic Visual Stage */}
        <div className="rounded-3xl overflow-hidden border border-[#C6A15B]/30 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Canvas Image */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px]">
              <img
                src={current.image}
                alt={current.headline}
                key={current.id}
                className="w-full h-full object-cover object-center transition-all duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activePhase === 'day'
                    ? 'bg-gradient-to-t from-[#F7F1E7]/80 via-transparent to-transparent'
                    : activePhase === 'evening'
                    ? 'bg-gradient-to-t from-[#291711]/90 via-[#C9683C]/20 to-transparent'
                    : 'bg-gradient-to-t from-[#0e0e0e]/95 via-[#111111]/30 to-transparent'
                }`}
              />

              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white text-xs flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>{current.timeSpan}</span>
              </div>
            </div>

            {/* Editorial Text Side */}
            <div
              className={`lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6 transition-colors duration-700 ${
                activePhase === 'day' ? 'bg-[#efe7d8]' : activePhase === 'evening' ? 'bg-[#1e100c]' : 'bg-[#151515]'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                  <span className="text-xs uppercase tracking-widest font-semibold opacity-70">
                    Phase: {current.label}
                  </span>
                </div>

                <h3 className="font-['DM_Serif_Display'] text-3xl sm:text-4xl leading-tight">
                  {current.headline}
                </h3>

                <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                  {current.subtitle}
                </p>

                <div className="pt-2 text-xs italic font-serif text-[#C6A15B]">
                  {current.atmosphere}
                </div>
              </div>

              <div className="pt-6 border-t border-current/10 flex items-center justify-between text-xs opacity-75">
                <span>Restaurant open until 10:30 PM</span>
                <span className="font-semibold text-[#C6A15B]">Bhabua, Bihar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
