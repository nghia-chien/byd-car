import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SHOWROOM_MODELS, CarModel, ColorOption } from '../data/showroomData';

interface FeaturedModelsProps {
  onOpenTestDrive: (source: string) => void;
  onToast: (msg: string) => void;
}

export const FeaturedModels: React.FC<FeaturedModelsProps> = ({ onOpenTestDrive, onToast }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedColorByModel, setSelectedColorByModel] = useState<Record<string, number>>({});
  const [isColorTransitioning, setIsColorTransitioning] = useState<boolean>(false);
  const [prevImage, setPrevImage] = useState<string | null>(null);
  const colorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const total = SHOWROOM_MODELS.length;
  const currentModel: CarModel = SHOWROOM_MODELS[currentIndex];
  const currentColors = currentModel.colors || [];
  const selectedColorIndex = selectedColorByModel[currentModel.id] ?? 0;
  const activeColor: ColorOption = currentColors[selectedColorIndex] || currentColors[0];

  // Preload all vehicle and color images upfront into GPU cache to eliminate decode latency on click
  useEffect(() => {
    SHOWROOM_MODELS.forEach((m) => {
      if (m.image) {
        const img = new Image();
        img.src = m.image;
      }
      m.colors?.forEach((c) => {
        if (c.image) {
          const cImg = new Image();
          cImg.src = c.image;
        }
      });
    });
  }, []);

  const getModelActiveImage = (model: CarModel): string => {
    const colorIdx = selectedColorByModel[model.id] ?? 0;
    const colorOpt = model.colors?.[colorIdx];
    return colorOpt?.image || model.image;
  };

  const clearColorTransition = () => {
    if (colorTimeoutRef.current) {
      clearTimeout(colorTimeoutRef.current);
    }
    setIsColorTransitioning(false);
    setPrevImage(null);
  };

  const handlePrev = () => {
    clearColorTransition();
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    clearColorTransition();
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleColorSelect = (index: number, color: ColorOption) => {
    if (index === selectedColorIndex && !isColorTransitioning) return;

    const currentImg = getModelActiveImage(currentModel);
    const targetImg = color.image || currentModel.image;

    // Cập nhật màu đã chọn cho xe hiện tại
    setSelectedColorByModel((prev) => ({
      ...prev,
      [currentModel.id]: index,
    }));

    onToast(`Đã chọn màu ngoại thất: ${color.name}`);

    // "không có ảnh thì khi chọn màu không cần đổi":
    // Nếu màu này không có ảnh riêng hoặc trùng với ảnh đang hiển thị, không cần đổi ảnh
    if (!color.image || targetImg === currentImg) {
      clearColorTransition();
      return;
    }

    // Nếu màu này có ảnh riêng khác với ảnh hiện tại, kích hoạt hiệu ứng slide mượt mà
    if (colorTimeoutRef.current) {
      clearTimeout(colorTimeoutRef.current);
    }

    setPrevImage(currentImg);
    setIsColorTransitioning(true);

    // Fallback safety timeout if onAnimationEnd doesn't fire
    colorTimeoutRef.current = setTimeout(() => {
      setIsColorTransitioning(false);
      setPrevImage(null);
    }, 700);
  };

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    if (diffX > 45) {
      handlePrev();
    } else if (diffX < -45) {
      handleNext();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="featured-models"
      className="relative py-20 lg:py-24 bg-[#F8F9FA] overflow-hidden min-h-dvh flex flex-col justify-center select-none scroll-mt-16"
    >
      <div className="max-w-[1260px] mx-auto px-6 w-full relative z-10">
        {/* Model Title & Tagline with Smooth Crossfade */}
        <div className="mb-4 sm:mb-6 max-w-md min-h-[90px] flex flex-col justify-end">
          <div key={`title-${currentModel.id}`} className="animate-in fade-in slide-in-from-left-3 duration-500">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-wide uppercase text-[#0F172A] mb-2">
              {currentModel.name}
            </h2>
            <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
              {currentModel.tagline}
            </p>
          </div>
        </div>

        {/* 3D Continuous Stage Vehicle Viewer */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[240px] sm:h-[340px] lg:h-[400px] flex items-center justify-center mb-6 overflow-visible"
        >
          {SHOWROOM_MODELS.map((model, idx) => {
            const diff = idx - currentIndex;
            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;

            let transformStr = '';
            let opacityVal = 0;
            let zIndexVal = 10;
            let filterStr = 'none';
            let pointerEvents: React.CSSProperties['pointerEvents'] = 'none';

            if (isCenter) {
              transformStr = 'translateX(0) scale(1)';
              opacityVal = 1;
              zIndexVal = 30;
              filterStr = 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))';
              pointerEvents = 'auto';
            } else if (isLeft) {
              transformStr = 'translateX(-56%) scale(0.72)';
              opacityVal = 0.45;
              zIndexVal = 15;
              filterStr = 'drop-shadow(0 10px 15px rgba(0,0,0,0.1)) blur(0.5px)';
              pointerEvents = 'auto';
            } else if (isRight) {
              transformStr = 'translateX(56%) scale(0.72)';
              opacityVal = 0.45;
              zIndexVal = 15;
              filterStr = 'drop-shadow(0 10px 15px rgba(0,0,0,0.1)) blur(0.5px)';
              pointerEvents = 'auto';
            } else if (diff < -1) {
              transformStr = 'translateX(-120%) scale(0.5)';
              opacityVal = 0;
              zIndexVal = 5;
            } else {
              transformStr = 'translateX(120%) scale(0.5)';
              opacityVal = 0;
              zIndexVal = 5;
            }

            const activeImg = getModelActiveImage(model);

            return (
              <div
                key={model.id}
                onClick={() => {
                  if (isLeft) handlePrev();
                  if (isRight) handleNext();
                }}
                style={{
                  transform: transformStr,
                  opacity: opacityVal,
                  zIndex: zIndexVal,
                  filter: filterStr,
                  pointerEvents,
                  transition: 'transform 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 550ms cubic-bezier(0.16, 1, 0.3, 1), filter 550ms ease'
                }}
                className={`absolute w-[80%] sm:w-[84%] max-w-[760px] flex flex-col items-center justify-center ${
                  !isCenter ? 'cursor-pointer hover:opacity-75' : ''
                }`}
              >
                {/* Vehicle Presentation: Support Smooth Top-to-Bottom Color Slide when color image changes */}
                <div className="relative w-full flex items-center justify-center">
                  {isCenter && isColorTransitioning && prevImage && prevImage !== activeImg ? (
                    <div className="relative w-full flex items-center justify-center">
                      {/* Outgoing Color Car: Glides downwards out */}
                      <img
                        key={`prev-${prevImage}`}
                        src={prevImage}
                        alt={`${model.name} màu trước`}
                        className="w-full h-auto object-contain pointer-events-none select-none absolute inset-0 animate-slide-out-down"
                        loading="eager"
                      />
                      {/* Incoming Color Car: Glides downwards in from top */}
                      <img
                        key={`curr-${activeImg}`}
                        src={activeImg}
                        alt={`${model.name} ${activeColor?.name || ''}`}
                        onAnimationEnd={() => {
                          if (colorTimeoutRef.current) {
                            clearTimeout(colorTimeoutRef.current);
                          }
                          setIsColorTransitioning(false);
                          setPrevImage(null);
                        }}
                        className="w-full h-auto object-contain pointer-events-none select-none relative z-10 animate-slide-in-down"
                        loading="eager"
                      />
                    </div>
                  ) : (
                    <img
                      src={activeImg}
                      alt={`${model.name} ${activeColor?.name || ''}`}
                      className="w-full h-auto object-contain pointer-events-none select-none"
                      loading="eager"
                    />
                  )}
                </div>

                {/* Ground Reflection for Center Car */}
                {isCenter && (
                  <div className="absolute -bottom-6 left-[12%] w-[76%] h-8 bg-[radial-gradient(ellipse_at_center,rgba(215,25,32,0.15)_0%,transparent_70%)] blur-md pointer-events-none transition-opacity duration-500" />
                )}
              </div>
            );
          })}

          {/* Smooth Carousel Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-40 w-11 h-11 rounded-full bg-white border border-gray-200 hover:border-[#D71920] text-[#0F172A] hover:text-[#D71920] hover:scale-110 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
            aria-label="Previous Vehicle"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-40 w-11 h-11 rounded-full bg-white border border-gray-200 hover:border-[#D71920] text-[#0F172A] hover:text-[#D71920] hover:scale-110 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
            aria-label="Next Vehicle"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Miniature Carousel Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {SHOWROOM_MODELS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                clearColorTransition();
                setCurrentIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                currentIndex === i
                  ? 'w-8 bg-[#D71920] shadow-[0_0_8px_rgba(215,25,32,0.4)]'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* 4 Separate Spec Cards with Subtle Dividers (Gray Automotive Telemetry) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-[940px] mx-auto mb-8 sm:mb-10">
          {/* Card 1: Range */}
          <div className="relative bg-white/85 backdrop-blur-md border border-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center shadow-xs hover:border-[#D71920]/60 hover:bg-white hover:shadow-[0_8px_20px_rgba(215,25,32,0.15)] hover:-translate-y-0.5 transition-all duration-300">
            <div className="font-mono text-[10px] uppercase tracking-[2px] text-gray-500 mb-2 font-bold">
              RANGE
            </div>
            <div
              key={`range-${currentModel.id}`}
              className="font-heading text-2xl sm:text-[28px] font-bold text-[#0F172A] animate-in fade-in duration-400"
            >
              {currentModel.range}
            </div>
            <div className="hidden lg:block absolute -right-2 top-1/4 h-1/2 w-[1px] border-r border-dashed border-gray-400/60 pointer-events-none" />
          </div>

          {/* Card 2: Power */}
          <div className="relative bg-white/85 backdrop-blur-md border border-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center shadow-xs hover:border-[#D71920]/60 hover:bg-white hover:shadow-[0_8px_20px_rgba(215,25,32,0.15)] hover:-translate-y-0.5 transition-all duration-300">
            <div className="font-mono text-[10px] uppercase tracking-[2px] text-gray-500 mb-2 font-bold">
              POWER
            </div>
            <div
              key={`power-${currentModel.id}`}
              className="font-heading text-2xl sm:text-[28px] font-bold text-[#0F172A] animate-in fade-in duration-400"
            >
              {currentModel.power}
            </div>
            <div className="hidden lg:block absolute -right-2 top-1/4 h-1/2 w-[1px] border-r border-dashed border-gray-400/60 pointer-events-none" />
          </div>

          {/* Card 3: Battery */}
          <div className="relative bg-white/85 backdrop-blur-md border border-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center shadow-xs hover:border-[#D71920]/60 hover:bg-white hover:shadow-[0_8px_20px_rgba(215,25,32,0.15)] hover:-translate-y-0.5 transition-all duration-300">
            <div className="font-mono text-[10px] uppercase tracking-[2px] text-gray-500 mb-2 font-bold">
              BATTERY
            </div>
            <div
              key={`bat-${currentModel.id}`}
              className="font-heading text-2xl sm:text-[28px] font-bold text-[#0F172A] animate-in fade-in duration-400"
            >
              {currentModel.battery}
            </div>
            <div className="hidden lg:block absolute -right-2 top-1/4 h-1/2 w-[1px] border-r border-dashed border-gray-400/60 pointer-events-none" />
          </div>

          {/* Card 4: Starting From */}
          <div className="relative bg-white/85 backdrop-blur-md border border-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center shadow-xs hover:border-[#D71920]/60 hover:bg-white hover:shadow-[0_8px_20px_rgba(215,25,32,0.15)] hover:-translate-y-0.5 transition-all duration-300">
            <div className="font-mono text-[10px] uppercase tracking-[2px] text-gray-500 mb-2 font-bold">
              STARTING FROM
            </div>
            <div
              key={`price-${currentModel.id}`}
              className="font-heading text-2xl sm:text-[28px] font-bold text-[#D71920] animate-in fade-in duration-400"
            >
              {currentModel.price}
            </div>
          </div>
        </div>

        {/* Bottom Controls Row: Swatches on Left, Buttons on Right */}
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-[940px] mx-auto gap-6">
          {/* Color Dots with WCAG 44px Tap Target */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start">
            <span className="text-xs text-gray-500 font-medium mr-1 hidden sm:inline">
              Màu ngoại thất:
            </span>
            <div className="flex items-center gap-1 sm:gap-2">
              {currentColors.map((c, i) => (
                <button
                  key={c.id}
                  title={c.name}
                  onClick={() => handleColorSelect(i, c)}
                  className="w-11 h-11 flex items-center justify-center cursor-pointer group"
                  aria-label={c.name}
                >
                  <span
                    style={{ backgroundColor: c.hex }}
                    className={`w-7 h-7 rounded-full transition-all duration-300 border ${
                      c.id.includes('white') ? 'border-gray-400 shadow-xs' : 'border-gray-300'
                    } ${
                      selectedColorIndex === i
                        ? 'scale-125 ring-2 ring-[#D71920] ring-offset-2 ring-offset-[#F8F9FA] shadow-md'
                        : 'group-hover:scale-110 opacity-80 group-hover:opacity-100'
                    }`}
                  />
                </button>
              ))}
            </div>
            <span className="text-xs font-semibold text-[#0F172A] tracking-tight ml-1">
              {activeColor?.name}
            </span>
          </div>

          {/* Dual Action Buttons with 44px Tap Targets */}
          <div className="flex items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={() => onOpenTestDrive(`View Details - ${currentModel.name}`)}
              className="flex-1 sm:flex-none min-h-[44px] inline-flex items-center justify-center bg-[#D71920] hover:bg-[#b8141a] text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-[4px] shadow-[0_4px_16px_rgba(215,25,32,0.3)] hover:shadow-[0_8px_20px_rgba(215,25,32,0.45)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-center active:scale-95"
            >
              Xem Chi Tiết Xe
            </button>

            <button
              onClick={() => onOpenTestDrive(`Book Test Drive - ${currentModel.name}`)}
              className="flex-1 sm:flex-none min-h-[44px] inline-flex items-center justify-center border border-[#D71920] text-[#D71920] hover:bg-red-50 bg-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-[4px] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-center active:scale-95"
            >
              Đăng Ký Lái Thử
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
