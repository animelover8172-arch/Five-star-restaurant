import React, { useState } from 'react';
import { RESTAURANT_INFO, SIGNATURE_DISH } from '../data/restaurantData';
import { X, CheckCircle2, Phone, MessageSquare, ShoppingBag, Utensils, Sparkles, Clock, MapPin } from 'lucide-react';
import { MoodType } from '../types/restaurant';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDish?: string;
  initialMood?: MoodType;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialDish,
  initialMood = 'takeaway'
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'dinein' | 'drive-through'>(
    initialMood === 'dine' ? 'dinein' : initialMood === 'hangout' ? 'dinein' : 'delivery'
  );
  const [selectedDish, setSelectedDish] = useState<string>(initialDish || SIGNATURE_DISH.name);
  const [quantity, setQuantity] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [orderRef, setOrderRef] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `FS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(ref);
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello Five Star Restaurant Bhabua,\n\nI would like to place an order / booking:\n• Type: ${orderType.toUpperCase()}\n• Item: ${selectedDish} (Qty: ${quantity})\n• Name: ${name || 'Valued Guest'}\n• Phone: ${phone || 'Not provided'}\n${
        orderType === 'delivery' ? `• Address: ${address}\n` : ''
      }${notes ? `• Note: ${notes}\n` : ''}\nThank you!`
    );
    return `https://wa.me/917654224826?text=${text}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#181818] border border-[#C6A15B]/40 rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#F7F1E7] hover:text-[#C6A15B] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#C6A15B] font-bold">
                Online Order & Table Booking
              </span>
              <h3 className="font-['DM_Serif_Display'] text-2xl sm:text-3xl text-[#F7F1E7]">
                FIVE STAR DINING
              </h3>
              <p className="text-xs text-[#D8D0C3]">
                Front of Devi Ji Mandir, Akhalashpur, Bhabua
              </p>
            </div>

            {/* Order Type Toggle */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { id: 'delivery', label: 'Delivery', icon: ShoppingBag },
                { id: 'dinein', label: 'Dine-In Table', icon: Utensils },
                { id: 'drive-through', label: 'Drive-Through', icon: Clock }
              ].map((t) => {
                const Icon = t.icon;
                const active = orderType === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setOrderType(t.id as any)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      active
                        ? 'bg-[#C6A15B] text-[#111111] shadow-lg'
                        : 'bg-[#222222] text-[#D8D0C3] border border-white/5 hover:bg-[#282828]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Dish Selection */}
              <div>
                <label className="text-xs font-medium text-[#D8D0C3] block mb-1.5">
                  Selected Dish / Special
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={selectedDish}
                    onChange={(e) => setSelectedDish(e.target.value)}
                    placeholder="e.g. Chicken Lollipop"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#222222] border border-white/10 text-xs text-[#F7F1E7] focus:outline-none focus:border-[#C6A15B]"
                  />
                  <div className="flex items-center bg-[#222222] border border-white/10 rounded-xl px-2">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2 text-sm text-[#D8D0C3] hover:text-white"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold px-2 text-[#F7F1E7]">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2 text-sm text-[#D8D0C3] hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Guest Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#D8D0C3] block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#222222] border border-white/10 text-xs text-[#F7F1E7] focus:outline-none focus:border-[#C6A15B]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#D8D0C3] block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#222222] border border-white/10 text-xs text-[#F7F1E7] focus:outline-none focus:border-[#C6A15B]"
                  />
                </div>
              </div>

              {/* Delivery Address if delivery */}
              {orderType === 'delivery' && (
                <div>
                  <label className="text-xs font-medium text-[#D8D0C3] block mb-1">
                    Delivery Address in Bhabua
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House/Street, Landmark, Bhabua"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#222222] border border-white/10 text-xs text-[#F7F1E7] focus:outline-none focus:border-[#C6A15B]"
                  />
                </div>
              )}

              {/* Special Instructions */}
              <div>
                <label className="text-xs font-medium text-[#D8D0C3] block mb-1">
                  Special Kitchen Requests / Seating Preference
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., Extra spicy, Outdoor fireplace table"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#222222] border border-white/10 text-xs text-[#F7F1E7] focus:outline-none focus:border-[#C6A15B]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 font-semibold text-xs uppercase tracking-wider text-[#111111] bg-[#C6A15B] hover:bg-[#d6b776] transition-colors rounded-xl shadow-lg cursor-pointer"
                >
                  Proceed to Confirm
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State with Direct WhatsApp / Call Dispatch */
          <div className="text-center py-4 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] tracking-widest uppercase text-[#C6A15B] font-bold">
                Order Request Prepared
              </span>
              <h4 className="font-['DM_Serif_Display'] text-2xl text-[#F7F1E7]">
                Ref #{orderRef}
              </h4>
              <p className="text-xs text-[#D8D0C3]">
                {name || 'Valued Guest'} · {selectedDish} (Qty: {quantity})
              </p>
            </div>

            <p className="text-xs text-[#D8D0C3] leading-relaxed max-w-sm mx-auto">
              To guarantee immediate kitchen dispatch or lock your table at Five Star Restaurant, connect directly with our Bhabua front desk:
            </p>

            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#111111] font-semibold text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>SEND VIA WHATSAPP (+91 7654224826)</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-[#F7F1E7] font-semibold text-xs tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C6A15B]" />
                <span>CALL RESTAURANT ({RESTAURANT_INFO.phone})</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="text-xs text-[#D8D0C3]/60 hover:text-white underline cursor-pointer pt-2"
            >
              Done & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
