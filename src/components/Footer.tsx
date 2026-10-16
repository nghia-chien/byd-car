import React from 'react';
import { DEALER_INFO } from '../data/dealerInfo';
import { FOOTER_COLUMNS, SOCIAL_BADGES, SocialBadgeItem } from '../data/footerData';

interface FooterProps {
  onOpenTestDrive: (source: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTestDrive }) => {
  const renderSocialIcon = (badge: SocialBadgeItem) => {
    switch (badge.type) {
      case 'facebook':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case 'zalo':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 0 1-.577-.573v.001a3.27 3.27 0 0 1-1.938.632a3.284 3.284 0 0 1-3.284-3.282a3.284 3.284 0 0 1 3.284-3.282a3.27 3.27 0 0 1 1.937.632zM6.919 7.79v.205c0 .382-.051.694-.3 1.06l-.03.034a8 8 0 0 0-.242.285L2.024 14.8h4.895v1.465H.192v-.759l4.577-6.223a6.8 6.8 0 0 0 .375-.58c.176-.307.264-.593.264-.858c0-.441-.184-.798-.553-1.071c-.368-.273-.855-.41-1.46-.41c-.553 0-1.036.126-1.448.378c-.413.252-.716.592-.91 1.022L.52 7.042C.83 6.27 1.345 5.666 2.065 5.23c.72-.436 1.545-.654 2.476-.654c1.11 0 2.025.26 2.747.78c.722.52 1.081 1.22 1.081 2.102zM15.47 16.142h1.442V7.788H15.47zm8.223-6.542c0 1.825-1.48 3.305-3.307 3.305c-1.826 0-3.306-1.48-3.306-3.305c0-1.824 1.48-3.305 3.306-3.305c1.827 0 3.307 1.481 3.307 3.305zm-10.141 5.253c1.068 0 1.932-.865 1.932-1.931s-.864-1.93-1.932-1.93s-1.932.864-1.932 1.93s.864 1.931 1.932 1.931zm10.141-.003c1.074 0 1.945-.87 1.945-1.945c0-1.073-.871-1.944-1.945-1.944s-1.945.871-1.945 1.944c0 1.075.87 1.945 1.945 1.945z" />
          </svg>
        );
      case 'maps':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
        );
      case 'hotline':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.68.25-1.02A11.36 11.36 0 0 1 8.56 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1.01z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-[#050505] text-gray-400 pt-20 pb-12 overflow-hidden border-t border-zinc-900 select-none">
      {/* Top Laser Accent - Aventor Black & Red Atmosphere */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D71920] to-transparent opacity-80" />

      {/* Subtle Ambient Red Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-96 h-96 bg-[#D71920]/8 blur-[120px] rounded-full" />

      <div className="max-w-[1260px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 mb-14">
          {/* Column 1: Brand & Contact Info (Aventor Style) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5">
            {/* Logo & Identity */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img
                  src="/logo/logo.svg"
                  alt="BYD Logo"
                  className="h-6 w-auto"
                />
                <span className="font-bold text-white text-base tracking-wide uppercase">
                  Thuận Minh Gia Lai
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#D71920] tracking-[0.25em] uppercase">
                BUILD YOUR DREAMS • GIA LAI SHOWROOM
              </span>
            </div>

            {/* Slogan & Description */}
            <p className="text-[13px] text-zinc-400 leading-relaxed max-w-md font-normal">
              Đại lý ủy quyền chính hãng của thương hiệu BYD tại Gia Lai. Tiên phong giải pháp xe năng lượng mới và dịch vụ hậu mãi chuẩn toàn cầu.
            </p>

            {/* Direct Contact Details */}
            <div className="flex flex-col gap-2 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <span className="text-[#D71920] font-semibold shrink-0">Địa chỉ:</span>
                <span className="text-zinc-300">{DEALER_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#D71920] font-semibold shrink-0">Hotline 24/7:</span>
                <a
                  href={`tel:${DEALER_INFO.hotlineFormatted}`}
                  className="text-white hover:text-[#D71920] font-bold transition-colors"
                >
                  {DEALER_INFO.hotline}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#D71920] font-semibold shrink-0">Tư vấn kinh doanh:</span>
                <span className="text-zinc-300">{DEALER_INFO.salesRep}</span>
              </div>
            </div>

            {/* Social Media Badges (Aventor Solid Square Style with Vibrant Custom Colors) */}
            
          </div>

          {/* Columns 2, 3, 4: Navigation Columns (Aventor Minimalist Typography) */}
          {FOOTER_COLUMNS.map((col, index) => (
            <div
              key={col.title}
              className={index === 2 ? 'lg:col-span-3' : 'lg:col-span-2'}
            >
              <h4 className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-white mb-5 flex items-center gap-2">
                
                {col.title}
              </h4>
              <ul className="flex flex-col space-y-3.5 text-[13px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.action ? (
                      <button
                        onClick={() => onOpenTestDrive(link.action!)}
                        className="text-zinc-400 hover:text-white transition-all duration-200 text-left cursor-pointer hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-zinc-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Razor-thin Divider with Central Red Accent (Aventor Style) */}
        <div className="relative border-t border-zinc-800/80 pt-8 pb-2">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D71920] to-transparent" />

          {/* Bottom Bar: Copyright & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div>
              © 2026 BYD Thuận Minh Gia Lai. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="hover:text-zinc-300 transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="hover:text-zinc-300 transition-colors">
                Chính sách bảo mật
              </a>
              <a
                href={DEALER_INFO.socialLinks.maps}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-300 transition-colors"
              >
                Bản đồ chỉ đường
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
