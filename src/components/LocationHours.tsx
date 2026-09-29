import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Clock, Compass, Navigation, CheckCircle } from 'lucide-react';

export const LocationHours: React.FC = () => {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    label: string;
    sublabel: string;
    closingInHours: number;
    closingInMinutes: number;
    currentTimeStr: string;
  }>({
    isOpen: true,
    label: 'OPEN NOW',
    sublabel: 'Closes at 10:30 PM tonight',
    closingInHours: 0,
    closingInMinutes: 0,
    currentTimeStr: ''
  });

  useEffect(() => {
    const updateTimeStatus = () => {
      const now = new Date();
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
      const currentTotalMin = currentHours * 60 + currentMinutes;

      const openTotalMin = RESTAURANT_INFO.openingHour * 60 + RESTAURANT_INFO.openingMinute;
      const closeTotalMin = RESTAURANT_INFO.closingHour * 60 + RESTAURANT_INFO.closingMinute;

      const isOpen = currentTotalMin >= openTotalMin && currentTotalMin <= closeTotalMin;

      const timeFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      if (isOpen) {
        const remainingMin = closeTotalMin - currentTotalMin;
        const remH = Math.floor(remainingMin / 60);
        const remM = remainingMin % 60;
        setStatus({
          isOpen: true,
          label: 'OPEN NOW',
          sublabel: `Closes at ${RESTAURANT_INFO.closingTimeStr} (${remH}h ${remM}m left)`,
          closingInHours: remH,
          closingInMinutes: remM,
          currentTimeStr: timeFormatted
        });
      } else {
        setStatus({
          isOpen: false,
          label: 'CLOSED NOW',
          sublabel: 'Kitchen opens tomorrow at 11:00 AM',
          closingInHours: 0,
          closingInMinutes: 0,
          currentTimeStr: timeFormatted
        });
      }
    };

    updateTimeStatus();
    const timer = setInterval(updateTimeStatus, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="location" className="py-24 bg-[#111111] relative overflow-hidden border-b border-[#C6A15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C6A15B] uppercase">
            Neighborhood Presence
          </p>
          <h2 className="font-['DM_Serif_Display'] text-4xl sm:text-6xl text-[#F7F1E7]">
            FIND YOUR <span className="text-[#C6A15B] italic font-light">TABLE.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D8D0C3]">
            Conveniently situated in Akhalashpur near Shivaji Chowk and ADB SBI Bank.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Address, Directions, Contact & Clock */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 bg-[#181818] p-8 sm:p-10 rounded-3xl border border-[#C6A15B]/30 shadow-2xl">
            {/* Address Block */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C9683C]/20 border border-[#C9683C]/40 flex items-center justify-center text-[#C9683C] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-[#C6A15B] uppercase font-bold block mb-1">
                    Official Location
                  </span>
                  <h3 className="font-['DM_Serif_Display'] text-2xl text-[#F7F1E7]">
                    Akhalashpur, Bhabua
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8D0C3] mt-2 leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Plus Code Badge */}
              <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-[#D8D0C3]">
                <Compass className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>
                  Plus Code: <strong className="text-[#F7F1E7] font-mono">{RESTAURANT_INFO.plusCode}</strong>
                </span>
              </div>
            </div>

            {/* Restaurant Clock Component */}
            <div className="p-6 rounded-2xl bg-[#202020] border border-[#C6A15B]/20 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs text-[#C6A15B] font-semibold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Restaurant Clock</span>
                </div>
                <span className="text-xs font-mono text-[#D8D0C3]">
                  Local Time: {status.currentTimeStr}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-4">
                {/* Visual Analog-like status indicator */}
                <div className="relative w-14 h-14 rounded-full border-2 border-[#C6A15B]/40 flex items-center justify-center shrink-0 bg-[#161616]">
                  <span
                    className={`w-4 h-4 rounded-full ${
                      status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-500'
                    }`}
                  />
                  {status.isOpen && (
                    <span className="absolute inset-0 rounded-full border border-emerald-400/40 animate-ping" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-lg font-bold font-['Space_Grotesk'] tracking-wider ${
                        status.isOpen ? 'text-emerald-400' : 'text-amber-400'
                      }`}
                    >
                      {status.label}
                    </span>
                    <span className="text-xs text-[#D8D0C3]">• Closes 10:30 PM</span>
                  </div>
                  <p className="text-xs text-[#D8D0C3]/80 mt-0.5">
                    {status.sublabel}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-2 gap-2 text-[11px] text-[#D8D0C3]">
                <div>Monday – Sunday:</div>
                <div className="text-right text-[#F7F1E7] font-medium">11:00 AM – 10:30 PM</div>
              </div>
            </div>

            {/* Action Buttons: Get Directions & Call */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 px-5 text-xs sm:text-sm font-semibold tracking-wider text-[#111111] bg-[#C6A15B] hover:bg-[#d6b776] rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="py-3.5 px-6 text-xs sm:text-sm font-medium text-[#F7F1E7] bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#C6A15B]" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed / Interactive Location Visualizer */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#C6A15B]/30 shadow-2xl bg-[#181818] relative min-h-[420px] flex flex-col">
            <div className="p-4 bg-[#202020] border-b border-white/10 flex items-center justify-between text-xs text-[#D8D0C3]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C9683C]" />
                <span className="font-medium text-[#F7F1E7]">Bhabua Map View</span>
              </div>
              <span className="font-mono text-[10px] text-[#C6A15B]">2JV2+3H Bihar</span>
            </div>

            {/* Google Maps iFrame Embed centered on Bhabua, Akhalashpur */}
            <div className="flex-1 relative w-full h-full min-h-[380px]">
              <iframe
                title="Five Star Restaurant Bhabua Location Map"
                src="https://maps.google.com/maps?q=Five+Star+Restaurant+Akhalashpur+Bhabua+Bihar+821101&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer"
                allowFullScreen
              />

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#111111]/95 backdrop-blur-md border border-[#C6A15B]/40 p-4 rounded-xl shadow-2xl pointer-events-none">
                <div className="text-xs font-bold text-[#F7F1E7]">
                  FIVE STAR RESTAURANT
                </div>
                <div className="text-[11px] text-[#C6A15B] font-serif">
                  Near ADB SBI Bank & Shivaji Chowk
                </div>
                <div className="text-[10px] text-[#D8D0C3]/80 mt-1">
                  Akhalashpur, Bhabua (821101)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
