import React from 'react';
import { Utensils, Car, ShieldCheck } from 'lucide-react';

export const DeliveryServices: React.FC = () => {
  const options = [
    {
      icon: Utensils,
      title: 'DINE-IN',
      detail: 'Spacious table seating with warm ambient light, outdoor patio, and fireplace hospitality in Akhalashpur.'
    },
    {
      icon: Car,
      title: 'DRIVE-THROUGH',
      detail: 'Convenient drive-up pickup near ADB SBI Bank and Devi Ji Mandir road. Call ahead for quick handoff.'
    },
    {
      icon: ShieldCheck,
      title: 'NO-CONTACT DELIVERY',
      detail: 'Freshly sealed parcels dispatched promptly to your home or office in Bhabua with complete hygiene assurance.'
    }
  ];

  return (
    <div className="py-12 bg-[#171717] border-y border-[#C6A15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C6A15B]/15 border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#F7F1E7] tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#D8D0C3] mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
