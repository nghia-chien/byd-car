import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { DEALER_INFO } from '../data/dealerInfo';

interface QuickContactProps {
  toastMessage: string | null;
}

export const QuickContact: React.FC<QuickContactProps> = ({ toastMessage }) => {
  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`tel:${DEALER_INFO.hotlineFormatted}`}
          className="w-13 h-13 rounded-full bg-[#D71920] hover:bg-[#b8141a] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer shadow-red-500/25"
          title="Gọi Hotline 0931 61 26 79"
          aria-label="Gọi Hotline"
        >
          <Phone size={22} />
        </a>   
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 bg-white border border-[#D71920] rounded-xl px-5 py-3.5 flex items-center gap-3 text-[#0F172A] shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 size={20} className="text-[#D71920] shrink-0" />
          <div className="text-xs">
            <div className="font-bold text-[#D71920] mb-0.5">Thông Báo</div>
            <div className="text-gray-700 font-medium">{toastMessage}</div>
          </div>
        </div>
      )}
    </>
  );
};
