import React from 'react';
import { HERO_DATA } from '../data/heroData';

interface HeroProps {
  onOpenTestDrive: (source: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTestDrive }) => {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col justify-end overflow-hidden bg-[#070809]"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), 88% 100%, 12% 100%, 0 calc(100% - 30px))'
      }}
    >
      {/* Background Car Image (Full Hero Backdrop) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO_DATA.backgroundImage}
          alt={HERO_DATA.altText}
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-95"
          loading="eager"
        />
        {/* Dark Vignettes & Gradients for Contrast */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#070809] via-[#070809]/50 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_0%,rgba(7,8,9,0.4)_50%,#070809_100%)] pointer-events-none" /> */}
      </div>

      {/* Hero Content Overlay: 2-Column Layout 1:1 Matching Reference */}
      <div className="relative z-10 max-w-[1260px] mx-auto px-6 w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          {/* Left Column: Bold Automotive Headline */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-medium sm:font-semibold tracking-tight text-white leading-[1.12]">
              {HERO_DATA.headlinePart1}
              <br />
              <span className="text-white">
                {HERO_DATA.headlinePart2}
              </span>
            </h1>
          </div>

          {/* Right Column: Refined Description & Primary CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4 sm:gap-5">
            <p className="text-xs sm:text-[14px] text-gray-300 font-light leading-relaxed max-w-md">
              {HERO_DATA.description}
            </p>

            <button
              onClick={() => onOpenTestDrive('Hero CTA')}
              className="bg-[#D71920] hover:bg-[#b8141a] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-[3px] shadow-[0_4px_20px_rgba(215,25,32,0.35)] hover:shadow-[0_8px_25px_rgba(215,25,32,0.5)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              {HERO_DATA.ctaText}
            </button>
          </div>
        </div>
      </div>

      {/* Chamfered Bottom Edge Accent Line */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[32px] pointer-events-none z-20"
        preserveAspectRatio="none"
        viewBox="0 0 1000 32"
        fill="none"
      >
        <polyline
          points="0,2 120,30 880,30 1000,2"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1.5"
        />
        <polyline
          points="120,31 880,31"
          stroke="rgba(215, 25, 32, 0.8)"
          strokeWidth="1.5"
        />
      </svg>
    </section>
  );
};
