import React from 'react';

interface PreFooterCTAProps {
  onOpenTestDrive: (source: string) => void;
}

export const PreFooterCTA: React.FC<PreFooterCTAProps> = ({ onOpenTestDrive }) => {
  // Chamfered top canopy silhouette matching reference:
  // Starts 42px down on left, cuts diagonally up to top, runs across center, cuts down to 42px on right
  const canopyChamferClip = 'polygon(0 42px, 14% 42px, 20% 0, 80% 0, 86% 42px, 100% 42px, 100% 100%, 0 100%)';

  return (
    <section id="pre-footer-cta" className="relative min-h-dvh flex flex-col justify-center bg-gradient-to-b from-[#E2E8F0] via-[#0A101D] to-[#050505] py-6 sm:py-8 lg:py-10 overflow-hidden select-none scroll-mt-16">
      {/* Outer Chamfered Canopy Wrapper with Luminous Top Contour Border */}
      <div 
        className="relative w-full pt-[1.5px] bg-gradient-to-r from-transparent via-blue-500/40 via-50% via-[#D71920] to-transparent"
        style={{ clipPath: canopyChamferClip }}
      >
        {/* Main Canopy Container - Car photo spans across BOTH Central Content Area and Automotive Showcase */}
        <div 
          className="relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] flex flex-col justify-between overflow-hidden bg-[#081734]"
          style={{ clipPath: canopyChamferClip }}
        >
          {/* Background Image: Spanning both Central Content Area and Automotive Showcase */}
          <img
            src="/image/prefooter-car-dark.jpg"
            alt="BYD M6 Gia Lai"
            className="absolute inset-0 w-full h-full object-cover object-[center_68%] sm:object-[center_64%] lg:object-[center_60%] z-0"
            loading="lazy"
          />

          {/* Scrim Overlay: Top Gradient to guarantee 100% legibility for white text & emblem over sky */}
          <div className="absolute inset-x-0 top-0 h-[380px] sm:h-[430px] bg-gradient-to-b from-[#081734]/92 via-[#081734]/70 via-55% to-transparent pointer-events-none z-10" />

          {/* Bottom Blend Gradient: Smooth transition into the dark footer */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-[#060A14] via-[#060A14]/75 to-transparent pointer-events-none z-10" />

          {/* Subtle Side Vignettes */}
          <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#081734]/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#081734]/80 to-transparent pointer-events-none z-10" />

          {/* Subtle Top Ambient Atmosphere Spotlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[760px] h-44 bg-radial from-[#1E40AF]/30 via-[#D71920]/15 to-transparent pointer-events-none blur-3xl z-10" />

          {/* Central Content Area (z-20) */}
          <div className="relative z-20 max-w-[840px] mx-auto px-6 pt-14 sm:pt-18 lg:pt-20 text-center">
            {/* Geometric Wing Emblem in Sharp Metallic Silver & BYD Red Accent */}
            <svg
              className="w-14 sm:w-16 h-8 sm:h-9 mx-auto mb-4 filter drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
              viewBox="0 0 80 44"
              fill="none"
            >
              {/* Left Wing Facet */}
              <path d="M40 24L10 4L26 20L40 38V24Z" fill="url(#wingGradL)" />
              {/* Right Wing Facet */}
              <path d="M40 24L70 4L54 20L40 38V24Z" fill="url(#wingGradR)" />
              {/* Center V-Shield Core in BYD Red */}
              <path d="M40 28L34 20H46L40 28Z" fill="#D71920" />
              {/* Top Accent Edge */}
              <path d="M30 18L40 8L50 18H30Z" fill="#FFFFFF" opacity="0.9" />

              <defs>
                <linearGradient id="wingGradL" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#94A3B8" />
                </linearGradient>
                <linearGradient id="wingGradR" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#94A3B8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Headline: Crisp White Typography */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-[3px] text-white mb-2.5 leading-tight drop-shadow-md">
              SẴN SÀNG TRẢI NGHIỆM BYD GIA LAI
            </h2>

            {/* Subtitle: High-contrast light blue-gray */}
            <p className="text-sm sm:text-base text-blue-100/90 font-normal mb-7 max-w-lg mx-auto leading-relaxed drop-shadow-sm">
              Tương lai của chuyển dịch xanh đang chờ đón bạn ngay sau tay lái.
            </p>

            {/* Button Pair: Red Primary Button + Outline Secondary Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 relative z-30">
              {/* Red CTA Button (Button Đỏ) */}
              <button
                onClick={() => onOpenTestDrive('Pre-Footer Section')}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center bg-[#D71920] hover:bg-[#b8141a] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded transition-all duration-300 shadow-[0_4px_24px_rgba(215,25,32,0.5)] hover:shadow-[0_8px_32px_rgba(215,25,32,0.7)] hover:-translate-y-0.5 cursor-pointer text-center"
              >
                Đặt Lịch Lái Thử
              </button>

              {/* Outline Secondary Button */}
              <a
                href="#featured-models"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold text-xs uppercase tracking-wider px-8 py-3.5 rounded transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-sm cursor-pointer text-center"
              >
                Khám Phá Các Dòng Xe
              </a>
            </div>
          </div>

          {/* Automotive Showcase Area (z-20) */}
          {/* Dedicated visual stage highlighting the BYD M6 fleet against the horizon */}
          <div className="relative z-20 w-full h-56 sm:h-72 lg:h-84 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
