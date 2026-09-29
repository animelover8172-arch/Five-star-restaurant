import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types/restaurant';
import { X, ZoomIn, Eye, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ambience' | 'dishes' | 'night'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#141414] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C6A15B] uppercase">
            Visual Journal
          </p>
          <h2 className="font-['DM_Serif_Display'] text-4xl sm:text-6xl text-[#F7F1E7]">
            ATMOSPHERE <span className="text-[#C6A15B] italic font-light">& DISHES.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D8D0C3]">
            A glimpse into the shared meals, outdoor fireplace evenings, and signature preparations at Five Star Restaurant.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(['all', 'dishes', 'ambience', 'night'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all uppercase cursor-pointer ${
                filter === cat
                  ? 'bg-[#C6A15B] text-[#111111] shadow-lg shadow-[#C6A15B]/20 font-bold scale-105'
                  : 'bg-[#202020] text-[#D8D0C3] hover:text-[#F7F1E7] border border-white/5'
              }`}
            >
              {cat === 'all' ? 'All Moments' : cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`group relative rounded-3xl overflow-hidden border border-[#C6A15B]/20 bg-[#1c1c1c] shadow-2xl cursor-pointer ${
                idx % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C6A15B] font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-['DM_Serif_Display'] text-2xl sm:text-3xl text-[#F7F1E7]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#D8D0C3] mt-1 max-w-md line-clamp-1">
                    {item.caption}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <ZoomIn className="w-4 h-4 text-[#C6A15B]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#181818] rounded-3xl overflow-hidden border border-[#C6A15B]/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close image preview"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:text-[#C6A15B] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] w-full bg-black">
                <img
                  src={activeItem.src}
                  alt={activeItem.alt}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 sm:p-8 bg-[#181818]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#C6A15B] font-bold">
                    {activeItem.category}
                  </span>
                  <span className="text-xs text-[#D8D0C3]">· Five Star Restaurant</span>
                </div>
                <h3 className="font-['DM_Serif_Display'] text-2xl sm:text-3xl text-[#F7F1E7]">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D8D0C3] mt-2">
                  {activeItem.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
