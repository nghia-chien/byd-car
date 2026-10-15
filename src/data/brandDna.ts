export interface BrandDnaPillar {
  title: string;
  tagline: string;
  image: string;
}

export interface BrandDnaData {
  headlineFirst: string;
  headlineHighlight: string;
  headlineLast: string;
  subDescription: string;
  pillars: BrandDnaPillar[];
}

export const BRAND_DNA_DATA: BrandDnaData = {
  headlineFirst: "Hội tụ tinh hoa công nghệ năng lượng mới. Chúng tôi ",
  headlineHighlight: "Định hình chuẩn mực",
  headlineLast: " trải nghiệm di chuyển tương lai.",
  subDescription: "Từ phát minh pin phiến Blade Battery mang tính cách mạng đến công nghệ DM-i siêu tiết kiệm và vi mạch bán dẫn SiC, BYD kiến tạo hệ sinh thái công nghệ xe năng lượng mới an toàn, bền bỉ và thông minh vượt trội.",
  pillars: [
    {
      title: "An Toàn Thân Xe",
      tagline: "Cấu trúc khung thép siêu cường bảo vệ đa hướng, vượt qua những bài kiểm tra an toàn va chạm khắt khe nhất.",
      image: "/tech/vehicle-safety-MOB.jpg"
    },
    {
      title: "Chip Bán Dẫn SiC",
      tagline: "Bộ xử lý trung tâm của phương tiện năng lượng mới, tối ưu hóa công suất tức thì và điều khiển dòng năng lượng.",
      image: "/tech/semiconductor-chip-PC.jpg"
    },
    {
      title: "Pin Blade Siêu An Toàn",
      tagline: "Vượt qua thử nghiệm đinh đâm không phát nổ hay bốc khói, cường độ nén 445 kN chịu tải tương đương 45 tấn.",
      image: "/tech/blade-battery-mob.jpg"
    },
    {
      title: "Công Nghệ DM-i Super Hybrid",
      tagline: "Mức tiêu thụ nhiên liệu kỷ lục chỉ 3,8 L/100 km, tăng tốc nhanh hơn 2-3s và vận hành siêu êm mượt.",
      image: "/tech/DM-i-MOB.jpg"
    }
  ]
};
