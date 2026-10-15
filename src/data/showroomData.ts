export interface CarModel {
  id: string;
  name: string;
  tagline: string;
  image: string;
  range: string;
  power: string;
  battery: string;
  price: string;
}

export interface ColorOption {
  name: string;
  hex: string;
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
    price: "Từ 1.119 Triệu"
  },
  {
    id: "sealion6",
    name: "BYD SEALION 6",
    tagline: "SUV công nghệ Super DM-i Hybrid tiên phong, tầm hoạt động vượt trội hơn 1.200 km, tiết kiệm nhiên liệu kỷ lục.",
    image: "/Sealion8.png",
    range: "1.200+ km",
    power: "214 hp",
    battery: "18.3 kWh",
    price: "Từ 868 Triệu"
  },
  {
    id: "han",
    name: "BYD HAN",
    tagline: "Sedan hạng sang đầu bảng mang phong cách Dynasty, nội thất da Nappa thủ công và hệ thống treo DiSus chủ động.",
    image: "/HAN.png",
    range: "605 km",
    power: "517 hp",
    battery: "85.4 kWh",
    price: "Từ 1.489 Triệu"
  },
  {
    id: "atto3",
    name: "BYD ATTO 3",
    tagline: "SUV đô thị năng động dẫn đầu toàn cầu, trang bị pin Blade an toàn tuyệt đối và thiết kế nội thất thể thao hiện đại.",
    image: "/ATTO3.png",
    range: "480 km",
    power: "201 hp",
    battery: "60.5 kWh",
    price: "Từ 766 Triệu"
  },
  {
    id: "m6",
    name: "BYD M6",
    tagline: "MPV thuần điện 7 chỗ dành cho gia đình hiện đại, không gian 3 hàng ghế rộng rãi, vận hành êm ái cùng hệ thống an toàn đa tầng.",
    image: "/m6.png",
    range: "420 km",
    power: "161 hp",
    battery: "55.4 kWh",
    price: "Từ 756 Triệu"
  }
];

export const COLOR_OPTIONS: ColorOption[] = [
  { name: "Đỏ Rượu (Crimson Wine)", hex: "#7A1C28" },
  { name: "Xanh Bắc Cực (Arctic Blue)", hex: "#1C3D82" },
  { name: "Xám Titan (Titanium Grey)", hex: "#2E343A" },
  { name: "Xanh Rừng Sâu (Emerald Green)", hex: "#0E3E34" },
  { name: "Vàng Năng Lượng (Solar Gold)", hex: "#E9B634" },
  { name: "Trắng Ngọc Trai (Pearl White)", hex: "#EAEAEA" }
];
