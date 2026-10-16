import React, { useState, useEffect } from 'react';
import { SHOWROOM_MODELS } from '../data/showroomData';
import { DEALER_INFO } from '../data/dealerInfo';

interface TestDriveModalProps {
  isOpen: boolean;
  source: string;
  onClose: () => void;
  onSuccess: (name: string, phone: string, car: string) => void;
}

const TIME_SLOTS = [
  'Càng sớm càng tốt',
  'Buổi sáng (08:30 - 11:30)',
  'Buổi chiều (13:30 - 17:30)',
  'Cuối tuần (Thứ 7 / Chủ Nhật)'
];

export const TestDriveModal: React.FC<TestDriveModalProps> = ({
  isOpen,
  source,
  onClose,
  onSuccess
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCar, setSelectedCar] = useState('BYD SEAL');
  const [locationType, setLocationType] = useState<'showroom' | 'home'>('showroom');
  const [preferredTime, setPreferredTime] = useState(TIME_SLOTS[0]);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Auto-detect car from source when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrorMsg(null);
      if (source) {
        const found = SHOWROOM_MODELS.find(
          (m) =>
            source.toLowerCase().includes(m.name.toLowerCase()) ||
            source.toLowerCase().includes(m.id.toLowerCase())
        );
        if (found) {
          setSelectedCar(found.name);
        }
      }
    }
  }, [isOpen, source]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = name.trim();
    const cleanPhone = phone.replace(/\D/g, '');

    if (!trimmedName) {
      setErrorMsg('Vui lòng nhập họ và tên của Quý khách.');
      return;
    }

    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      setErrorMsg('Vui lòng nhập số điện thoại hợp lệ (10 chữ số).');
      return;
    }

    setIsSubmitted(true);
    onSuccess(trimmedName, phone, selectedCar);

    // Auto-close modal after brief acknowledgment
    setTimeout(() => {
      setName('');
      setPhone('');
      setNotes('');
      setIsSubmitted(false);
      onClose();
    }, 3800);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/45 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 select-none animate-in fade-in duration-150">
      {/* Background click dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main White Minimalist Modal Card */}
      <div className="relative z-10 w-full max-w-[560px] bg-white border border-gray-200 rounded-2xl shadow-xl text-black overflow-hidden my-auto max-h-[96vh] overflow-y-auto">
        {/* Dismiss Button (pure text symbol, no icon, no span) */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer text-lg leading-none z-20"
          aria-label="Đóng biểu mẫu"
        >
          ✕
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="p-8 sm:p-10 text-center flex flex-col items-center justify-center">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-black mb-3">
              ĐĂNG KÝ LÁI THỬ THÀNH CÔNG
            </h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-6 font-normal">
              Cảm ơn Quý khách <strong className="text-black font-semibold">{name}</strong>. Chuyên viên tư vấn{' '}
              <strong className="text-black font-semibold">{DEALER_INFO.salesRep}</strong> sẽ liên hệ với Quý khách qua số{' '}
              <strong className="text-black font-semibold">{phone}</strong> trong vòng 15 phút để chuẩn bị xe{' '}
              <strong className="text-black font-semibold">{selectedCar}</strong>.
            </p>

            <p className="text-xs text-gray-400 mb-6">
              Biểu mẫu sẽ tự động đóng sau giây lát...
            </p>

            <button
              type="button"
              onClick={onClose}
              className="px-8 py-2.5 rounded-lg bg-[#D71920] hover:bg-[#b8141a] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              ĐÓNG
            </button>
          </div>
        ) : (
          /* Form Content */
          <div className="p-6 sm:p-8 pt-6 sm:pt-7">
            {/* Header: Centered title without 'minh thuận gia lai' and 'trải nghiệm...' */}
            <div className="mb-5 text-center">
              <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wide text-black leading-tight">
                Đăng Ký Lái Thử & Báo Giá
              </h3>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs text-center">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 1. THÔNG TIN LIÊN HỆ */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[1.5px] text-gray-600 font-semibold mb-2">
                  1. THÔNG TIN LIÊN HỆ
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Họ và tên của Quý khách *"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Số điện thoại / Zalo *"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>
              </div>

              {/* 2. DÒNG XE (Dropdown, only vehicle name) */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[1.5px] text-gray-600 font-semibold mb-2">
                  2. DÒNG XE
                </label>
                <select
                  value={selectedCar}
                  onChange={(e) => setSelectedCar(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors cursor-pointer"
                >
                  {SHOWROOM_MODELS.map((model) => (
                    <option key={model.id} value={model.name}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. ĐỊA ĐIỂM */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[1.5px] text-gray-600 font-semibold mb-2">
                  3. ĐỊA ĐIỂM
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg mb-2.5">
                  <button
                    type="button"
                    onClick={() => setLocationType('showroom')}
                    className={`py-2 px-3 rounded-md text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                      locationType === 'showroom'
                        ? 'bg-white text-black shadow-xs'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Tại Showroom Pleiku
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocationType('home')}
                    className={`py-2 px-3 rounded-md text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                      locationType === 'home'
                        ? 'bg-white text-black shadow-xs'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Lái thử tận nơi (Gia Lai)
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors cursor-pointer"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>

                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ghi chú thêm (nếu có)..."
                    className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA (Red Button) */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[44px] bg-[#D71920] hover:bg-[#b8141a] text-white font-bold text-xs uppercase tracking-[2px] py-3 rounded-lg transition-colors cursor-pointer shadow-md shadow-red-500/20 active:scale-[0.99]"
                >
                  XÁC NHẬN ĐĂNG KÝ LÁI THỬ
                </button>
              </div>

              {/* Reassurance Footer */}
              <div className="pt-1 text-center text-[11px] text-gray-500">
                Bảo mật thông tin • Hotline {DEALER_INFO.hotlineFormatted} • Xác nhận trong 15 phút
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
