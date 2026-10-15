import React from 'react';
import { BRAND_DNA_DATA } from '../data/brandDna';

export const BrandDNA: React.FC = () => {
  // Soft aerodynamic chamfered silhouette (gentle 14px continuous chamfer without harsh stepped notches)
  const softChamferClip = 'polygon(0 14px, 14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px))';

  return (
    <section id="brand-dna" className="relative bg-[#F8F9FA] pt-20 lg:pt-28 pb-28 min-h-dvh flex flex-col justify-center border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mb-6">

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-medium sm:font-semibold text-[#0F172A] leading-[1.18] max-w-5xl tracking-tight">
            {BRAND_DNA_DATA.headlineFirst}
            <span className="italic font-serif text-[#D71920] font-normal border-b border-[#D71920]/30 pb-0.5">
              {BRAND_DNA_DATA.headlineHighlight}
            </span>
            {BRAND_DNA_DATA.headlineLast}
          </h2>
        </div>

        {/* Editorial Divider Line & Description */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          <div className="w-full md:flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-gray-200" />
          <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed max-w-lg font-normal">
            {BRAND_DNA_DATA.subDescription}
          </p>
        </div>

        {/* 4 Iconic Soft-Chamfered Tech Cards with Automotive Gradients */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {BRAND_DNA_DATA.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group p-[1.5px] bg-gradient-to-b from-white via-gray-300 to-gray-200 hover:from-[#D71920] hover:via-[#D71920]/50 hover:to-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(215,25,32,0.14)] cursor-pointer"
              style={{ clipPath: softChamferClip }}
            >
              <div
                className="w-full h-full bg-gradient-to-b from-white via-[#F8F9FA] to-[#EEF2F6] group-hover:from-white group-hover:via-red-50/20 group-hover:to-white flex flex-col justify-between overflow-hidden transition-all duration-300 border border-gray-200/90 shadow-md"
                style={{ clipPath: softChamferClip }}
              >
                {/* Card Top Tech Image (Crystal Clear & Taller) */}
                <div className="w-full h-56 sm:h-64 lg:h-72 overflow-hidden bg-gray-100 relative">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Bottom Label & Tech Details (Gradient Background + Clean Typography) */}
                <div className="p-5 sm:p-6 bg-gradient-to-b from-white/95 via-[#F8F9FA]/90 to-[#EEF2F6]/90 border-t border-gray-200/80 transition-colors">
                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#D71920] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Tech Tagline */}
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {pillar.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
