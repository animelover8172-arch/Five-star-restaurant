import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MoodSelector } from './components/MoodSelector';
import { HeroTransition } from './components/HeroTransition';
import { FiveStarTable } from './components/FiveStarTable';
import { SignatureDish } from './components/SignatureDish';
import { DigitalMenu } from './components/DigitalMenu';
import { AfterDark } from './components/AfterDark';
import { AmbiencePanels } from './components/AmbiencePanels';
import { PriceSection } from './components/PriceSection';
import { ReviewsSection } from './components/ReviewsSection';
import { OrderOnlineSection } from './components/OrderOnlineSection';
import { DeliveryServices } from './components/DeliveryServices';
import { LocationHours } from './components/LocationHours';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { OrderModal } from './components/OrderModal';
import { MoodType } from './types/restaurant';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedDishForOrder, setSelectedDishForOrder] = useState<string>('Chicken Lollipop');
  const [activeMood, setActiveMood] = useState<MoodType>('dine');

  const handleOpenOrder = () => {
    setSelectedDishForOrder('Chicken Lollipop');
    setIsOrderModalOpen(true);
  };

  const handleOrderSpecificDish = (dishName: string) => {
    setSelectedDishForOrder(dishName);
    setIsOrderModalOpen(true);
  };

  const handleOpenOrderWithMood = (mood: MoodType) => {
    setActiveMood(mood);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#F7F1E7] selection:bg-[#C9683C] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenOrder={handleOpenOrder} />

      <main>
        {/* Hero Section: "COME HUNGRY. LEAVE HAPPY." */}
        <Hero onOpenOrder={handleOpenOrder} />

        {/* Delivery / Drive-through / Dine-in Services Strip */}
        <DeliveryServices />

        {/* Signature Interaction: "PICK YOUR MOOD" */}
        <MoodSelector
          onSelectMood={setActiveMood}
          onOpenOrderWithMood={handleOpenOrderWithMood}
        />

        {/* Hero Transition: Scroll Reveal Typography */}
        <HeroTransition />

        {/* The Five Star Table: "ONE TABLE. MANY STORIES." with Interactive Hotspots */}
        <FiveStarTable />

        {/* Signature Food Showcase: Chicken Lollipop */}
        <SignatureDish onOrderDish={handleOrderSpecificDish} />

        {/* Editorial Digital Menu */}
        <DigitalMenu onOrderDish={handleOrderSpecificDish} />

        {/* Signature Visual: "FIVE STAR AFTER DARK" Day to Night Transition */}
        <AfterDark />

        {/* Ambience Section: Outdoor Seating, Fireplace, All-You-Can-Eat */}
        <AmbiencePanels />

        {/* Food + Price Section: "GOOD FOOD. HONEST PRICES." */}
        <PriceSection />

        {/* Customer Stories & Trust: Google Reviews (3.7 ★ — 352 Reviews) */}
        <ReviewsSection />

        {/* Conversion Section: "YOUR TABLE OR YOUR DOOR." */}
        <OrderOnlineSection onOpenOrder={handleOpenOrder} />

        {/* Gallery: Editorial Masonry & Lightbox */}
        <Gallery />

        {/* Location & Real Restaurant Clock */}
        <LocationHours />
      </main>

      {/* Footer with RoadsideDeveloper mandatory credits */}
      <Footer />

      {/* Floating Quick Action Bar, Back-to-Top, and Scroll Progress */}
      <FloatingActions onOpenOrder={handleOpenOrder} />

      {/* Order & Table Booking Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialDish={selectedDishForOrder}
        initialMood={activeMood}
      />
    </div>
  );
}
