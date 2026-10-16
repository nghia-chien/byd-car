import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SmartTechnologyProps {
  onOpenTestDrive?: (source: string) => void;
  onToast?: (msg: string) => void;
}

const TECH_CARDS = [
  {
    id: 'dm-hybrid',
    title: 'Công Nghệ Hybrid DM-i & DM-p',
    description: 'Hệ thống truyền động chế độ kép kết hợp động cơ đốt trong và mô-tơ điện, bứt tốc 0-100 km/h trong 4,5 giây cùng mức tiêu hao chỉ từ 3,8 L/100 km.',
    image: '/tech/DM-p-MOB.jpg',
    alt: 'Hệ thống truyền động Hybrid DM-p và DM-i của BYD'
  },
  {
    id: 'ctb-chassis',
    title: 'Khung Gầm & Pin Blade CTB',
    description: 'Công nghệ Cell-to-Body tích hợp bộ pin Blade an toàn trực tiếp vào kết cấu khung gầm, tối ưu không gian nội thất và gia tăng độ cứng vững vượt trội.',
    image: '/tech/auto-mob.jpg',
    alt: 'Khung gầm thuần điện tích hợp pin Blade CTB của BYD'
  }
];

export const SmartTechnology: React.FC<SmartTechnologyProps> = ({ 
  onOpenTestDrive 
}) => {
  return (
    <section 
      id="smart-tech"
      className="relative min-h-dvh flex flex-col justify-center py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F8F9FA] to-[#EEF2F6] select-none scroll-mt-16"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading: Centered, Clean, No Eyebrow */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#0F172A] mb-2.5 leading-tight">
            Công Nghệ Cốt Lõi BYD
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
            Đột phá tiên phong trong hệ thống truyền động điện hóa và cấu trúc pin tích hợp an toàn.
          </p>
        </div>

        {/* 2 Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TECH_CARDS.map((card) => (
            <div
              key={card.id}
              className="group bg-white rounded-2xl border border-gray-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:border-gray-300 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* High-Resolution Photo Container (100% Brightness & Sharpness) */}
              <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] bg-[#0A1222] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text Area: Chữ nhỏ + Ít lại */}
              <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0F172A] group-hover:text-[#D71920] transition-colors mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 font-normal leading-relaxed mb-5">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenTestDrive?.(card.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D71920] hover:text-[#0F172A] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Đăng Ký Tư Vấn</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
