import React from 'react';
import { PERFORMANCE_METRICS } from '../data/performanceMetrics';

interface PerformanceProps {
  onOpenTestDrive: (source: string) => void;
}

export const Performance: React.FC<PerformanceProps> = ({ onOpenTestDrive }) => {
  return (
    <section id="performance" className="relative min-h-dvh flex flex-col justify-center py-20 lg:py-24 overflow-hidden select-none border-t border-gray-200 scroll-mt-16">
      {/* Background Image: model.jpg with atmospheric showroom overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/image/model.jpg"
          alt="BYD Performance Horizon"
          className="w-full h-full object-cover object-[center_55%] sm:object-[center_50%] lg:object-[center_45%]"
          loading="lazy"
        />
        {/* Soft atmospheric scrim ensuring 100% readability */}
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />
        {/* Subtle lateral gradient for text clarity on the left */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-white/75 via-white/45 to-transparent" />
        {/* Top Blend from FeaturedModels */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F8F9FA] via-[#F8F9FA]/70 to-transparent" />
        {/* Bottom Blend to SmartTechnology */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      <div className="max-w-[1260px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] mb-5 leading-tight">
              Hiệu Năng Vượt Trội<br />
              Đo Bằng Con Số.
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-8 font-normal">
              Không chỉ là những thông số kỹ thuật khô khan trên giấy tờ, công nghệ New Energy của BYD đem đến lực kéo tức thì, độ ổn định tuyệt vời trên các cung đường đèo dốc Gia Lai và sự yên tĩnh vượt trội cho cả gia đình.
            </p>
            <button
              onClick={() => onOpenTestDrive('Performance Section')}
              className="min-h-[44px] inline-flex items-center justify-center bg-white/90 hover:bg-[#D71920] border border-gray-300 hover:border-[#D71920] text-[#0F172A] hover:text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_8px_20px_rgba(215,25,32,0.35)] active:scale-95 backdrop-blur-sm"
            >
              Trải Nghiệm Lái Thực Tế
            </button>
          </div>

          {/* Right Column: 2x3 Metric Cards Grid (Glassmorphism) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {PERFORMANCE_METRICS.map((metric, i) => (
              <div
                key={i}
                className="bg-white/85 backdrop-blur-md border border-white/80 hover:border-[#D71920]/60 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_28px_rgba(215,25,32,0.12)] shadow-md group"
              >
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] flex items-baseline justify-center mb-1 group-hover:scale-105 transition-transform">
                  <span>{metric.value}</span>
                  <span className="text-sm font-bold text-[#D71920] ml-0.5">
                    {metric.unit}
                  </span>
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
