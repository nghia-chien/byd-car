export interface FooterLink {
  label: string;
  href?: string;
  action?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'VỀ CHÚNG TÔI',
    links: [
      { label: 'Giới Thiệu Đại Lý', href: '#brand-dna' },
      { label: 'Công Nghệ Xanh BYD', href: '#hero' },
      { label: 'Showroom Trực Tuyến', href: '#featured-models' },
      { label: 'Tin Tức & Khuyến Mãi', href: '#smart-tech' },
      { label: 'Cam Kết Bền Vững', href: '#brand-dna' }
    ]
  },
  {
    title: 'DÒNG XE NỔI BẬT',
    links: [
      { label: 'BYD Sealion 6 (DM-i)', href: '#featured-models' },
      { label: 'BYD M9 (The Boss World)', href: '#featured-models' },
      { label: 'BYD Sealion 5', href: '#featured-models' },
      { label: 'BYD Seal Sedan', href: '#featured-models' },
      { label: 'BYD Atto 3 Crossover', href: '#featured-models' }
    ]
  },
  {
    title: 'DỊCH VỤ & HỖ TRỢ',
    links: [
      { label: 'Chính Sách Pin Blade 8 Năm', action: 'Bảo hành pin' },
      { label: 'Tư Vấn Hỗ Trợ Trả Góp 80%', action: 'Tư vấn trả góp' },
      { label: 'Đăng Ký Lái Thử Tận Nhà Gia Lai', action: 'Lái thử tận nhà' },
      { label: 'Dịch Vụ Cứu Hộ & Bảo Dưỡng 24/7', href: 'tel:0931612679' },
      { label: 'Đặt Hẹn Lịch Trực Tuyến', action: 'Đặt hẹn bảo dưỡng' }
    ]
  }
];

export interface SocialBadgeItem {
  id: string;
  name: string;
  href: string;
  bgClass: string;
  shadowClass: string;
  type: 'facebook' | 'zalo' | 'maps' | 'hotline' | 'youtube';
}

export const SOCIAL_BADGES: SocialBadgeItem[] = [
  {
    id: 'facebook',
    name: 'Facebook BYD Thuận Minh Gia Lai',
    href: 'https://www.facebook.com',
    bgClass: 'bg-[#1877F2] hover:bg-[#166fe5]',
    shadowClass: 'shadow-[#1877F2]/25',
    type: 'facebook'
  },
  {
    id: 'zalo',
    name: 'Zalo tư vấn viên BYD Gia Lai',
    href: 'https://zalo.me/0931612679',
    bgClass: 'bg-[#0068FF] hover:bg-[#0057d9]',
    shadowClass: 'shadow-[#0068FF]/25',
    type: 'zalo'
  },
  {
    id: 'maps',
    name: 'Bản đồ chỉ đường Showroom Pleiku',
    href: 'https://maps.google.com',
    bgClass: 'bg-[#10B981] hover:bg-[#059669]',
    shadowClass: 'shadow-[#10B981]/25',
    type: 'maps'
  },
  {
    id: 'hotline',
    name: 'Hotline Gọi Tư Vấn 24/7',
    href: 'tel:0931612679',
    bgClass: 'bg-[#16A34A] hover:bg-[#15803d]',
    shadowClass: 'shadow-[#16A34A]/25',
    type: 'hotline'
  },
  {
    id: 'youtube',
    name: 'Kênh YouTube BYD',
    href: 'https://youtube.com',
    bgClass: 'bg-[#FF0000] hover:bg-[#cc0000]',
    shadowClass: 'shadow-[#FF0000]/25',
    type: 'youtube'
  }
];
