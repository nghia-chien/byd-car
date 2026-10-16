import React from 'react';
import { E_PLATFORM_DATA } from '../data/ePlatformData';

interface WheelStudioProps {
  onOpenTestDrive?: (source: string) => void;
  onToast?: (msg: string) => void;
}

export const WheelStudio: React.FC<WheelStudioProps> = () => {
  const leftPillars = E_PLATFORM_DATA.pillars.slice(0, 2);
  const rightPillars = E_PLATFORM_DATA.pillars.slice(2, 4);

  return (
    <section 
      id="wheel-studio" 
      className="relative min-h-dvh flex flex-col justify-center py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F8FAFC] via-[#EEF2F6] to-[#E2E8F0] overflow-hidden select-none scroll-mt-16"
    >
      {/* 1. Automotive Studio Backdrop (Ambient Spotlight & Grid Pattern) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Ambient Studio Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] max-w-[96vw] h-[520px] bg-radial from-white via-slate-200/50 to-transparent blur-3xl" />
        
        {/* Subtle Technical Studio Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #94A3B8 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* 2. Top Center Heading (No Eyebrow) */}
        <div className="max-w-[880px] mx-auto text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#0F172A] mb-3 leading-tight">
            {E_PLATFORM_DATA.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            {E_PLATFORM_DATA.subheading}
          </p>
        </div>

        {/* 3. Main Stage: Chữ chi tiết qua 2 bên, Chassis ở giữa trên bệ xoay */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-6">
            
            {/* Left Column (2 Pillars): An Toàn & Hiệu Quả Cao */}
            <div className="lg:col-span-3 flex flex-col gap-6 sm:gap-8 lg:text-left order-2 lg:order-1">
              {leftPillars.map((pillar) => (
                <div key={pillar.id} className="flex flex-col lg:items-start">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F172A] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Column: 3D Transparent e-Platform Chassis on Integrated Studio Turntable */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4 order-1 lg:order-2 pointer-events-none">
              {/* Elliptical Studio Turntable Pedestal aligned perfectly under Chassis */}
              <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108%] max-w-[640px] h-[190px] sm:h-[230px] rounded-[100%] border border-slate-300/85 bg-gradient-to-b from-white/95 via-slate-100 to-slate-200/60 shadow-[0_24px_50px_rgba(15,23,42,0.08)] -z-10" />

              {/* Tire Ground Contact Shadow */}
              <div className="absolute top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84%] max-w-[500px] h-[26px] bg-radial from-slate-900/30 via-slate-700/10 to-transparent blur-md -z-10" />

              {/* Chassis Image Elevated to Optical Center */}
              <img
                src={E_PLATFORM_DATA.image}
                alt="BYD e-Platform 3.0 Electric Architecture"
                className="max-h-[320px] sm:max-h-[390px] lg:max-h-[450px] w-auto max-w-[96%] object-contain filter drop-shadow-[0_16px_36px_rgba(15,23,42,0.18)] transition-all duration-700 -translate-y-3 lg:-translate-y-6"
                loading="lazy"
              />
            </div>

            {/* Right Column (2 Pillars): Thông Minh & Thẩm Mỹ */}
            <div className="lg:col-span-3 flex flex-col gap-6 sm:gap-8 text-left order-3">
              {rightPillars.map((pillar) => (
                <div key={pillar.id} className="flex flex-col items-start">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F172A] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
