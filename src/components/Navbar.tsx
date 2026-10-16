import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { DEALER_INFO } from '../data/dealerInfo';

interface NavbarProps {
  onOpenTestDrive: (source: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTestDrive }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 transition-all duration-300 shadow-xs">
      <div className="max-w-[1260px] mx-auto px-6 h-[76px] flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <img
            src="/logo/logo-dark.svg"
            alt="BYD Logo"
            className="h-5 sm:h-5.5 w-auto transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#brand-dna" className="text-[12px] font-semibold uppercase tracking-wider text-gray-700 hover:text-[#D71920] transition-colors">THIẾT KẾ</a>
          <a href="#featured-models" className="text-[12px] font-semibold uppercase tracking-wider text-gray-700 hover:text-[#D71920] transition-colors">DÒNG XE</a>
          <a href="#performance" className="text-[12px] font-semibold uppercase tracking-wider text-gray-700 hover:text-[#D71920] transition-colors">HIỆU NĂNG</a>
          <a href="#smart-tech" className="text-[12px] font-semibold uppercase tracking-wider text-gray-700 hover:text-[#D71920] transition-colors">CÔNG NGHỆ SHOWROOM</a>
          <a href="#wheel-studio" className="text-[12px] font-semibold uppercase tracking-wider text-gray-700 hover:text-[#D71920] transition-colors">E-PLATFORM 3.0</a>
          
        </nav>

        {/* Action Group */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            href={`tel:${DEALER_INFO.hotlineFormatted}`}
            className="hidden sm:inline-flex min-h-[44px] items-center gap-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 px-4 py-2 rounded-full text-[13px] font-semibold text-[#0F172A] transition-colors group"
          >
            <Phone size={14} className="text-[#D71920] group-hover:scale-110 transition-transform" />
            <span>{DEALER_INFO.hotlineFormatted}</span>
          </a>

          <button
            onClick={() => onOpenTestDrive('Navbar CTA')}
            className="min-h-[44px] inline-flex items-center justify-center bg-[#D71920] hover:bg-[#b8141a] text-white font-bold text-[12px] sm:text-[13px] uppercase tracking-wider px-5 py-2.5 rounded transition-all duration-300 shadow-[0_4px_16px_rgba(215,25,32,0.3)] hover:shadow-[0_8px_20px_rgba(215,25,32,0.45)] hover:-translate-y-0.5 cursor-pointer active:scale-95"
          >
            Lái Thử
          </button>

          {/* Mobile Menu Button with 44px Tap Target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-[#0F172A] hover:text-[#D71920] transition-colors cursor-pointer rounded"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 flex flex-col gap-2 text-xs font-semibold uppercase tracking-wider shadow-xl">
          <a href="#brand-dna" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-gray-700 hover:text-[#D71920] transition-colors">THIẾT KẾ</a>
          <a href="#featured-models" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-gray-700 hover:text-[#D71920] transition-colors">DÒNG XE TRƯNG BÀY</a>
          <a href="#performance" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-gray-700 hover:text-[#D71920] transition-colors">THÔNG SỐ HIỆU NĂNG</a>
          <a href="#smart-tech" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-gray-700 hover:text-[#D71920] transition-colors">CÔNG NGHỆ SHOWROOM</a>
          <a href="#wheel-studio" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-gray-700 hover:text-[#D71920] transition-colors">NỀN TẢNG E-PLATFORM 3.0</a>
          <a href={`tel:${DEALER_INFO.hotlineFormatted}`} className="text-[#D71920] font-bold min-h-[44px] inline-flex items-center gap-2 pt-2 border-t border-gray-200">
            <Phone size={16} />{DEALER_INFO.hotlineFormatted}
          </a>
        </div>
      )}
    </header>
  );
};
