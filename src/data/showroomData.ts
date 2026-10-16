export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  image?: string; // Đường dẫn ảnh riêng của màu nếu có. Nếu không có, khi chọn màu sẽ giữ nguyên ảnh hiện tại của xe
}

export interface CarModel {
  id: string;
  name: string;
  tagline: string;
  image: string;
  range: string;
  power: string;
  battery: string;
  price: string;
  colors: ColorOption[];
}

export const SHOWROOM_MODELS: CarModel[] = [
  {
    id: "seal",
    name: "BYD SEAL",
    tagline: "Sedan thể thao thuần điện e-Platform 3.0 với khả năng bứt tốc 0-100 km/h trong 3.8 giây và hệ số cản gió kỷ lục 0.219 Cd.",
    image: "/SEAL.png",
    range: "650 km",
    power: "530 hp",
    battery: "82.5 kWh",
    price: "Từ 1.119 Triệu",
    colors: [
      { id: "seal-blue", name: "Xanh Dương (Arctic Blue)", hex: "#1C3D82", image: "/SEAL.png" },
      { id: "seal-white", name: "Trắng (Pearl White)", hex: "#FFFFFF", image: "/SEAL_White.png" },
      { id: "seal-black", name: "Đen (Shadow Black)", hex: "#111827", image: "/SEAL_Black.png" }
    ]
  },
  {
    id: "sealion6",
    name: "BYD SEALION 6",
    tagline: "SUV công nghệ Super DM-i Hybrid tiên phong, tầm hoạt động vượt trội hơn 1.200 km, tiết kiệm nhiên liệu kỷ lục.",
    image: "/Sealion8.png",
    range: "1.200+ km",
    power: "214 hp",
    battery: "18.3 kWh",
    price: "Từ 868 Triệu",
    colors: [
      { id: "sealion-white", name: "Trắng (Snow White)", hex: "#F3F4F6", image: "/Sealion8.png" },
      { id: "sealion-black", name: "Đen (Space Black)", hex: "#18181B" },
      { id: "sealion-grey", name: "Xám (Delos Grey)", hex: "#52525B" },
      { id: "sealion-blue", name: "Xanh (Harbour Blue)", hex: "#2563EB" }
    ]
  },
  {
    id: "han",
    name: "BYD HAN",
    tagline: "Sedan hạng sang đầu bảng mang phong cách Dynasty, nội thất da Nappa thủ công và hệ thống treo DiSus chủ động.",
    image: "/HAN.png",
    range: "605 km",
    power: "517 hp",
    battery: "85.4 kWh",
    price: "Từ 1.489 Triệu",
    colors: [
      { id: "han-black", name: "Đen (Space Black)", hex: "#171717", image: "/HAN.png" },
      { id: "han-white", name: "Trắng (Snow White)", hex: "#FFFFFF" },
      { id: "han-grey", name: "Xám (Time Grey)", hex: "#4B5563" },
      { id: "han-red", name: "Đỏ Hoàng Gia (Emperor Red)", hex: "#991B1B" }
    ]
  },
  {
    id: "atto3",
    name: "BYD ATTO 3",
    tagline: "SUV đô thị năng động dẫn đầu toàn cầu, trang bị pin Blade an toàn tuyệt đối và thiết kế nội thất thể thao hiện đại.",
    image: "/ATTO3.png",
    range: "480 km",
    power: "201 hp",
    battery: "60.5 kWh",
    price: "Từ 766 Triệu",
    colors: [
      { id: "atto-blue", name: "Xanh Lướt Sóng (Surfing Blue)", hex: "#1E40AF", image: "/ATTO3.png" },
      { id: "atto-white", name: "Trắng Trượt Tuyết (Skiing White)", hex: "#F8FAFC" },
      { id: "atto-grey", name: "Xám Leo Núi (Boulder Grey)", hex: "#4B5563" },
      { id: "atto-red", name: "Đỏ Parkour (Parkour Red)", hex: "#DC2626" }
    ]
  },
  {
    id: "m6",
    name: "BYD M6",
    tagline: "MPV thuần điện 7 chỗ dành cho gia đình hiện đại, không gian 3 hàng ghế rộng rãi, vận hành êm ái cùng hệ thống an toàn đa tầng.",
    image: "/m6.png",
    range: "420 km",
    power: "161 hp",
    battery: "55.4 kWh",
    price: "Từ 756 Triệu",
    colors: [
      { id: "m6-white", name: "Trắng Pha Lê (Crystal White)", hex: "#FFFFFF", image: "/m6.png" },
      { id: "m6-black", name: "Đen Vũ Trụ (Cosmos Black)", hex: "#18181B" },
      { id: "m6-grey", name: "Xám Cảng Biển (Harbour Grey)", hex: "#6B7280" },
      { id: "m6-blue", name: "Xanh Đại Dương (Aqua Blue)", hex: "#0284C7" }
    ]
  }
];

// Giữ lại COLOR_OPTIONS cho khả năng tương thích ngược
export const COLOR_OPTIONS: ColorOption[] = SHOWROOM_MODELS[0].colors;
