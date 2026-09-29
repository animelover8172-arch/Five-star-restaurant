import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, MessageSquare, Globe, Heart, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0b0b] text-[#D8D0C3] border-t border-[#C6A15B]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background warm glow */}
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <h3 className="font-['DM_Serif_Display'] text-3xl sm:text-4xl text-[#F7F1E7] tracking-wider leading-none">
                {RESTAURANT_INFO.name}
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-base text-[#C6A15B] font-semibold mt-1">
                {RESTAURANT_INFO.hindiName}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#D8D0C3]/80 leading-relaxed max-w-sm">
              Modern Indian Restaurant × Social Dining × Night Hangout. Good food, warm ambience, and a table made for sharing in Akhalashpur, Bhabua.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D8D0C3]/70">
              <Clock className="w-4 h-4 text-[#C6A15B]" />
              <span>Open Daily: 11:00 AM – 10:30 PM</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#menu" className="hover:text-[#C6A15B] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#table-experience" className="hover:text-[#C6A15B] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#after-dark" className="hover:text-[#C6A15B] transition-colors">
                  After Dark
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C6A15B] transition-colors">
                  Reviews (3.7 ★)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C6A15B] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C6A15B] transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Restaurant Contact Details */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-bold">
              Restaurant Contact
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-[#D8D0C3]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9683C] shrink-0 mt-0.5" />
                <span>
                  {RESTAURANT_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-white transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#C6A15B]">Plus Code:</span>
                <span className="font-mono text-xs">{RESTAURANT_INFO.plusCode}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory RoadsideDeveloper Developer Credits Block */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#D8D0C3]/80">
          <div>
            <p className="text-[#F7F1E7] font-medium">
              © {new Date().getFullYear()} Five Star Restaurant. All rights reserved.
            </p>
            <p className="text-[11px] text-[#D8D0C3]/60 mt-0.5">
              3.7 ★ with 352 Google Reviews · Akhalashpur, Bhabua, Bihar 821101
            </p>
          </div>

          {/* RoadsideDeveloper Credits */}
          <div className="p-4 rounded-2xl bg-[#141414] border border-[#C6A15B]/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
            <div className="flex items-center gap-2 text-[#F7F1E7] font-semibold">
              <Globe className="w-4 h-4 text-[#C6A15B]" />
              <span>Created by RoadsideDeveloper</span>
            </div>

            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:border-l sm:border-white/10 sm:pl-4">
              <a
                href="https://wa.me/917654224826"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 7654224826</span>
              </a>

              <a
                href="tel:+918405918172"
                className="flex items-center gap-1.5 text-[#C6A15B] hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: +91 8405918172</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
