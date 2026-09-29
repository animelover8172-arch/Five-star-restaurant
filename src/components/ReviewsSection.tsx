import React, { useState } from 'react';
import { GOOGLE_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, CheckCircle, AlertCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? GOOGLE_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === GOOGLE_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const current = GOOGLE_REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Header with Large 3.7 Visual Element */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 pb-12 border-b border-white/10">
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C6A15B] uppercase block">
              Customer Voices & Transparency
            </span>
            <h2 className="font-['DM_Serif_Display'] text-4xl sm:text-5xl text-[#F7F1E7]">
              VERIFIED DINER <span className="text-[#C6A15B] italic font-light">STORIES.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#D8D0C3]">
              Real, unfiltered Google reviews from patrons who have walked through our doors in Bhabua. We proudly display both praise and constructive critique.
            </p>
          </div>

          {/* Large Visual Trust Metric */}
          <div className="lg:col-span-7 flex flex-wrap items-center justify-start lg:justify-end gap-6 sm:gap-10">
            <div className="flex items-center gap-4 bg-[#1a1a1a] px-6 py-4 rounded-3xl border border-[#C6A15B]/30">
              <div className="text-5xl sm:text-6xl font-bold font-['Space_Grotesk'] text-[#F7F1E7] flex items-baseline">
                {RESTAURANT_INFO.rating}
                <span className="text-2xl text-[#C9683C] ml-1">★</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <div className="flex text-[#C9683C] text-sm">
                  {'★'.repeat(3)}
                  <span className="opacity-70">★</span>
                  <span className="opacity-30">★</span>
                </div>
                <div className="text-sm font-bold text-[#F7F1E7] mt-0.5">
                  {RESTAURANT_INFO.reviewsCount} Google Reviews
                </div>
                <div className="text-[10px] text-[#D8D0C3]/70 uppercase tracking-widest">
                  Verified Local Feedback
                </div>
              </div>
            </div>

            <div className="text-xs text-[#D8D0C3] max-w-[200px]">
              <span className="font-semibold text-[#F7F1E7] block mb-0.5">
                {RESTAURANT_INFO.name}
              </span>
              Google Business Profile Ratings & Feedback in Bhabua, Bihar
            </div>
          </div>
        </div>

        {/* Elegant Horizontal Review Card Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#191919] rounded-3xl p-8 sm:p-12 border border-[#C6A15B]/30 shadow-2xl transition-all duration-300">
            {/* Top Bar of Review Card */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center font-bold text-[#C6A15B]">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] font-bold text-base text-[#F7F1E7] tracking-wide">
                    {current.author}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#D8D0C3]">
                    <span>Google Customer Review</span>
                    <span>·</span>
                    <span className="text-[#C6A15B]">{current.timeAgo}</span>
                  </div>
                </div>
              </div>

              {/* Star Rating & Sentiment Pill */}
              <div className="flex items-center gap-3">
                <div className="flex items-center text-[#C9683C]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < current.rating
                          ? 'fill-[#C9683C] text-[#C9683C]'
                          : 'text-[#D8D0C3]/30 fill-transparent'
                      }`}
                    />
                  ))}
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    current.sentiment === 'positive'
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/40'
                      : 'bg-amber-950/80 text-amber-300 border border-amber-800/40'
                  }`}
                >
                  {current.sentiment === 'positive' ? 'Verified Positive' : 'Constructive Feedback'}
                </span>
              </div>
            </div>

            {/* Review Quote Text */}
            <div className="relative py-4">
              <MessageSquareQuote className="w-10 h-10 text-[#C6A15B]/20 absolute -top-2 -left-2" />
              <blockquote className="font-['DM_Serif_Display'] text-xl sm:text-2xl md:text-3xl text-[#F7F1E7] leading-relaxed relative z-10 italic">
                "{current.comment}"
              </blockquote>
            </div>

            {/* Tag Highlights */}
            {current.highlights && (
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/10">
                {current.highlights.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-[#D8D0C3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/5">
              <div className="text-xs text-[#D8D0C3]/60 font-mono">
                Review {currentIndex + 1} of {GOOGLE_REVIEWS.length}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  aria-label="Previous review"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#F7F1E7] hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  aria-label="Next review"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#F7F1E7] hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick thumbnails of all reviews */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            {GOOGLE_REVIEWS.map((rev, index) => (
              <button
                key={rev.id}
                onClick={() => setCurrentIndex(index)}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  currentIndex === index
                    ? 'bg-[#222222] border-[#C6A15B]'
                    : 'bg-[#151515] border-white/5 hover:border-white/20'
                }`}
              >
                <div className="text-xs font-bold text-[#F7F1E7] truncate">{rev.author}</div>
                <div className="text-[10px] text-[#C6A15B] font-serif italic truncate">
                  {rev.rating}★ · {rev.sentiment}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
