import React, { useState } from 'react';
import { X } from 'lucide-react';

interface TestDriveModalProps {
  isOpen: boolean;
  source: string;
  onClose: () => void;
  onSuccess: (name: string, phone: string, car: string) => void;
}

export const TestDriveModal: React.FC<TestDriveModalProps> = ({
  isOpen,
  source,
  onClose,
  onSuccess
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [car, setCar] = useState('BYD Sealion 6');
  const [service, setService] = useState('Lái thử tại Showroom Pleiku');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Vui lòng nhập họ tên và số điện thoại liên hệ.');
      return;
    }

    onSuccess(name, phone, car);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-white border border-gray-200 rounded-3xl p-6 sm:p-9 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#0F172A] hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Đóng form"
        >
          <X size={18} />
        </button>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#0F172A]">
            Đăng Ký Lái Thử & Báo Giá
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            Nhận trọn gói ưu đãi 100% trước bạ và quà tặng phụ kiện đặc biệt từ tư vấn viên Minh Toàn.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="hidden" name="source" value={source} />

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
              Họ và Tên *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ví dụ: Nguyễn Văn An"
              className="w-full bg-gray-50 border border-gray-300 rounded px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
              Số Điện Thoại / Zalo *
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              title="Vui lòng nhập 10 chữ số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ví dụ: 0912 345 678"
              className="w-full bg-gray-50 border border-gray-300 rounded px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                Dòng Xe Quan Tâm
              </label>
              <select
                value={car}
                onChange={(e) => setCar(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#D71920] transition-colors"
              >
                <option value="BYD Sealion 6">BYD Sealion 6 (DM-i)</option>
                <option value="BYD M9">BYD M9 (MPV 7 Chỗ)</option>
                <option value="BYD Sealion 5">BYD Sealion 5</option>
                <option value="BYD Seal">BYD Seal Sedan</option>
                <option value="BYD Atto 3">BYD Atto 3 Crossover</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                Hình Thức Hỗ Trợ
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded px-3.5 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#D71920] transition-colors"
              >
                <option value="Lái thử tại Showroom Pleiku">Lái thử tại Showroom Pleiku</option>
                <option value="Lái thử tận nhà">Lái thử tận nhà (Gia Lai)</option>
                <option value="Nhận báo giá lăn bánh">Nhận báo giá & ưu đãi</option>
                <option value="Tư vấn hồ sơ trả góp">Tư vấn trả góp 80%</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
              Ghi Chú Hoặc Thời Gian Tiện Nhất
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ví dụ: Đặt lịch lái thử sáng thứ 7..."
              className="w-full bg-gray-50 border border-gray-300 rounded px-3.5 py-2 text-sm text-[#0F172A] focus:outline-none focus:border-[#D71920] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-[#D71920] hover:bg-[#b8141a] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded transition-all shadow-[0_4px_16px_rgba(215,25,32,0.3)] hover:shadow-[0_8px_20px_rgba(215,25,32,0.45)] cursor-pointer"
          >
            Gửi Yêu Cầu & Nhận Ưu Đãi
          </button>
        </form>
      </div>
    </div>
  );
};
