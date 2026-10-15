import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { BrandDNA } from '../components/BrandDna';
import { FeaturedModels } from '../components/FeaturedModels';
import { Performance } from '../components/Performance';
import { WheelStudio } from '../components/WheelStudio';
import { SmartTechnology } from '../components/SmartTechnology';
import { PreFooterCTA } from '../components/PreFooterCTA';
import { Footer } from '../components/Footer';
import { TestDriveModal } from '../components/TestDriveModal';
import { QuickContact } from '../components/QuickContact';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Website');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenTestDrive = (source: string) => {
    setModalSource(source);
    setModalOpen(true);
  };

  const handleToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleFormSuccess = (name: string, phone: string, car: string) => {
    handleToast(`Cảm ơn ${name}! Tư vấn viên Minh Toàn (BYD Gia Lai) sẽ liên hệ ${phone} để xếp lịch lái thử ${car}.`);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col selection:bg-[#D71920] selection:text-white">

      {/* 2. Glassmorphic Navigation */}
      <Navbar onOpenTestDrive={handleOpenTestDrive} />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero onOpenTestDrive={handleOpenTestDrive} />

        {/* 4. Brand DNA Section */}
        <BrandDNA />

        {/* 5. Featured Models Showroom */}
        <FeaturedModels onOpenTestDrive={handleOpenTestDrive} onToast={handleToast} />

        <Performance onOpenTestDrive={handleOpenTestDrive} />



        {/* 8. Full-Bleed Showroom Technology (Động cơ & Khung xe) */}
        <SmartTechnology onOpenTestDrive={handleOpenTestDrive} onToast={handleToast} />

        {/* 7. Wheel Studio Configurator */}
        <WheelStudio onOpenTestDrive={handleOpenTestDrive} />
        {/* 10. Pre-Footer Call to Action */}
        <PreFooterCTA onOpenTestDrive={handleOpenTestDrive} />
      </main>

      {/* 11. Full Footer */}
      <Footer onOpenTestDrive={handleOpenTestDrive} />

      {/* 12. Modal Form */}
      <TestDriveModal
        isOpen={modalOpen}
        source={modalSource}
        onClose={() => setModalOpen(false)}
        onSuccess={handleFormSuccess}
      />

      {/* 13. Floating Quick Contact & Toasts */}
      <QuickContact toastMessage={toastMessage} />
    </div>
  );
};

export default App;
