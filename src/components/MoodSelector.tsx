import React, { useState, useEffect } from 'react';
import { MOOD_OPTIONS, RESTAURANT_INFO, RESTAURANT_IMAGES } from '../data/restaurantData';
import { MoodType } from '../types/restaurant';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface MoodSelectorProps {
  onSelectMood: (mood: MoodType) => void;
  onOpenOrderWithMood: (mood: MoodType) => void;
}

export const MoodSelector: React.FC<MoodSelectorProps> = ({ onSelectMood, onOpenOrderWithMood }) => {
  const [selectedMood, setSelectedMood] = useState<MoodType>('dine');

  // Load saved preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('five_star_mood') as MoodType | null;
    if (saved && ['dine', 'hangout', 'takeaway'].includes(saved)) {
      setSelectedMood(saved);
      onSelectMood(saved);
    }
  }, [onSelectMood]);

  const handleSelect = (mood: MoodType) => {
    setSelectedMood(mood);
    localStorage.setItem('five_star_mood', mood);
    onSelectMood(mood);
  };

  const currentOption = MOOD_OPTIONS.find((m) => m.id === selectedMood) || MOOD_OPTIONS[0];

  // Visual imagery config mapped to each mood
  const moodVisuals: Record<MoodType, { image: string; tag: string; banner: string }> = {
    dine: {
      image: RESTAURANT_IMAGES.tableOverhead,
      tag: 'Communal Dining & Shared Feasts',
      banner: 'Relaxed Indoor Seating · Table Service · Fresh Tandoor'
    },
    hangout: {
      image: RESTAURANT_IMAGES.nightAmbience,
      tag: 'Open-Air Patio & Fireplace Heat',
      banner: 'Outdoor Breeze · Evening Vibe · Stays Open Till 10:30 PM'
    },
    takeaway: {
      image: RESTAURANT_IMAGES.chickenLollipop,
      tag: 'Freshly Packed & Drive-Through',
      banner: 'Drive-Through Pick-Up · No-Contact Doorstep Delivery'
    }
  };

  const currentVisual = moodVisuals[selectedMood];

  return (
    <section id="mood-selector" className="py-20 bg-[#161616] relative border-y border-[#C6A15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C6A15B] uppercase">
            Signature Experience
          </p>
          <h2 className="font-['DM_Serif_Display'] text-4xl sm:text-5xl text-[#F7F1E7]">
            PICK YOUR MOOD.
          </h2>
          <p className="text-sm sm:text-base text-[#D8D0C3]">
            Whether you want an unhurried dinner, a late-evening outdoor conversation, or hot food at your doorstep.
          </p>
        </div>

        {/* 3 Mood Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {MOOD_OPTIONS.map((mood) => {
            const isActive = selectedMood === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => handleSelect(mood.id)}
                className={`relative p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between group cursor-pointer ${
                  isActive
                    ? 'bg-[#222222] border-[#C6A15B] shadow-xl shadow-[#C6A15B]/10 scale-[1.02]'
                    : 'bg-[#181818]/70 border-white/10 hover:border-[#C6A15B]/40 hover:bg-[#1c1c1c]'
                }`}
              >
                {isActive && (
                  <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#C6A15B] text-[#111111] uppercase tracking-wider">
                    Selected
                  </span>
                )}
                <div>
                  <span className="text-3xl block mb-2">{mood.icon}</span>
                  <h3 className="font-['DM_Serif_Display'] text-2xl text-[#F7F1E7] group-hover:text-[#C6A15B] transition-colors">
                    {mood.title}
                  </h3>
                  <p className="text-xs text-[#C6A15B] italic font-serif mt-1">
                    {mood.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#D8D0C3]">
                  <span>Explore this vibe</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#C6A15B] translate-x-1' : 'text-[#D8D0C3]/50'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Panel that transitions seamlessly */}
        <div className="rounded-3xl bg-[#1d1d1d] border border-[#C6A15B]/25 overflow-hidden shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Content */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{currentOption.icon}</span>
                  <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
                    Mood: {currentOption.title}
                  </span>
                </div>

                <h3 className="font-['DM_Serif_Display'] text-3xl sm:text-4xl text-[#F7F1E7]">
                  {currentOption.tagline}
                </h3>

                <p className="text-sm sm:text-base text-[#D8D0C3] leading-relaxed">
                  {currentOption.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  {currentOption.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F7F1E7]">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenOrderWithMood(selectedMood)}
                  className="px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider text-[#111111] bg-[#C6A15B] hover:bg-[#d4b472] transition-colors rounded-lg flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {selectedMood === 'dine'
                      ? 'Reserve Your Table'
                      : selectedMood === 'hangout'
                      ? 'Plan Evening Hangout'
                      : 'Order For Takeaway / Delivery'}
                  </span>
                </button>

                <span className="text-xs text-[#D8D0C3]/60 italic">
                  Selection saved in your browser
                </span>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px]">
              <img
                src={currentVisual.image}
                alt={currentVisual.tag}
                className="w-full h-full object-cover object-center transition-all duration-700"
                key={selectedMood}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold block mb-1">
                  {currentVisual.tag}
                </span>
                <p className="text-xs text-[#F7F1E7]/90 font-light">
                  {currentVisual.banner}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
