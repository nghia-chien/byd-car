# 🚗 DỰ ÁN BYD THUẬN MINH GIA LAI - DIGITAL SHOWROOM & LÁI THỬ TRỰC TUYẾN
> **TÀI LIỆU BÀN GIAO KỸ THUẬT & HƯỚNG DẪN VẬN HÀNH DỰ ÁN (PROJECT HANDOVER DOCUMENT)**  
> **Đơn vị phát triển:** DUDI Software  
> **Khách hàng tiếp nhận:** Đại lý Ô tô Điện BYD Thuận Minh Gia Lai (Tây Nguyên)

---

## 1. THÔNG TIN TÀI LIỆU (DOCUMENT METADATA)

| Thuộc tính | Chi tiết |
| :--- | :--- |
| **Tên tài liệu** | Technical Handover & System Operations Document |
| **Tên dự án** | BYD Thuận Minh Gia Lai Digital Showroom & Test Drive Portal |
| **Mã dự án (Repository)** | `byd-car` / `dudi/byd` |
| **Phiên bản mã nguồn** | `v1.2.0 (Production Release)` |
| **Ngày biên soạn / Bàn giao** | 16/10/2026 |
| **Đơn vị thực hiện** | Công ty TNHH Công nghệ Phần mềm DUDI (DUDI Software) |
| **Mục đích tài liệu** | Xác nhận hoàn thành nghiệm thu, cung cấp tài liệu kỹ thuật đầy đủ để vận hành, bảo trì, tiếp nhận mã nguồn và phát triển mở rộng mà không phụ thuộc vào kỹ sư ban đầu |
| **Phạm vi áp dụng** | Đội ngũ kỹ thuật DUDI Software & Ban quản trị BYD Thuận Minh Gia Lai |

---

## 2. THÔNG TIN DỰ ÁN (PROJECT OVERVIEW)

| Thuộc tính | Chi tiết |
| :--- | :--- |
| **Tên dự án** | Website Digital Showroom & Đăng Ký Lái Thử BYD Thuận Minh Gia Lai |
| **Chủ đầu tư / Đơn vị tiếp nhận**| Showroom BYD Thuận Minh Gia Lai |
| **Địa chỉ Showroom** | 337 Phan Đình Phùng, Phường Yên Đỗ, Thành phố Pleiku, Tỉnh Gia Lai |
| **Hotline kinh doanh & Lái thử** | `0935 889 247` \| `0905 123 456` |
| **Website chính thức / Demo** | `http://localhost:5173/` (Local) / Ready for Cloud Deployment |
| **Thời gian triển khai** | 10/2026 |
| **Trạng thái dự án** | **ĐÃ HOÀN THÀNH & NGHIỆM THU 100% GIAO DIỆN & TÍNH NĂNG** |

---

## 3. TỔNG QUAN HỆ THỐNG & MỤC TIÊU (SYSTEM SCOPE)

### 3.1. Mục tiêu dự án
1. **Số hóa không gian trưng bày:** Mang đến trải nghiệm showroom kỹ thuật số chuẩn quốc tế cho thương hiệu xe năng lượng mới hàng đầu thế giới BYD tại Gia Lai và vùng Tây Nguyên.
2. **Trải nghiệm thị giác vượt trội:** Sử dụng giao diện Dark Mode công nghệ thể thao (lấy cảm hứng từ Aventor Đen - Đỏ), hiệu ứng chuyển động mượt mà 60fps và hiển thị thông số chi tiết của từng dòng xe.
3. **Thúc đẩy chuyển đổi (Conversion Rate):** Tối ưu quy trình tiếp cận khách hàng tiềm năng qua hệ thống đăng ký lái thử trực tuyến, gọi hotline tức thì và kết nối Zalo OA tư vấn 1-1.

### 3.2. Đối tượng phục vụ
- **Khách hàng cá nhân & gia đình:** Tìm hiểu các dòng xe sedan thể thao, SUV gia đình, MPV 7 chỗ chạy điện và hybrid.
- **Doanh nghiệp & Đơn vị vận tải:** Tiếp cận giải pháp xe xanh tiết kiệm chi phí nhiên liệu và bảo vệ môi trường.
- **Đội ngũ tư vấn bán hàng (Showroom Sales):** Dùng làm catalogue kỹ thuật số trực quan trên tablet/laptop khi giới thiệu cho khách tại showroom hoặc sự kiện lái thử.

---

## 4. PHẠM VI CHỨC NĂNG ĐÃ TRIỂN KHAI (FEATURES & MODULES)

Hệ thống được thiết kế dạng Single Page Application (SPA) với cấu trúc phân tầng rõ ràng, tối ưu tốc độ tải trang và trải nghiệm người dùng:

```
[ Navbar (Sticky & Glassmorphism) ]
  ├── [ 1. Hero Section (Chamfered Tech Polygon) ]
  ├── [ 2. Brand DNA (Triết Lý Xe Năng Lượng Mới) ]
  ├── [ 3. Featured Models (Carousel 3D & Color Switcher) ]
  ├── [ 4. Performance & Telemetry (Thông Số Vận Hành) ]
  ├── [ 5. Smart Technology (Khung Gầm CTB & Blade Battery) ]
  ├── [ 6. Wheel & Chassis Studio (Bệ Xoay e-Platform 3.0) ]
  ├── [ 7. PreFooter CTA (Vòm Canopy M6 & Form Lái Thử) ]
  └── [ 8. Footer (Aventor Đen Đỏ & Social Network Badges) ]
  + [ TestDriveModal (Popup Đăng Ký Lái Thử) ]
  + [ QuickContact (Nút Gọi & Zalo Nổi Góc Màn Hình) ]
```

### 4.1. Chi tiết các Module & Section

| STT | Tên Module / File | Mô tả chức năng & Trải nghiệm giao diện |
| :---: | :--- | :--- |
| **1** | **Navbar**<br>`src/components/Navbar.tsx` | - Thanh điều hướng cố định (Sticky) với hiệu ứng làm mờ nền kính mờ `backdrop-blur-md`.<br>- Logo BYD chuẩn vector tỉ lệ vàng.<br>- Menu danh mục viết hoa (`DÒNG XE`, `CÔNG NGHỆ`, `HIỆU NĂNG`, `SHOWROOM`, `LIÊN HỆ`) có gạch chân active neon đỏ.<br>- Nút gọi hotline nhanh và CTA nổi bật "ĐĂNG KÝ LÁI THỬ".<br>- Mobile Drawer menu tối ưu cảm ứng (Touch Target $\ge$ 44px). |
| **2** | **Hero Section**<br>`src/components/Hero.tsx` | - Thiết kế vát chéo thể thao (Chamfered Polygon) liền mạch với section bên dưới mà không sinh vạch cắt thô.<br>- Headline định vị thương hiệu: *"BYD THUẬN MINH GIA LAI - KỶ NGUYÊN DI CHUYỂN XANH TÂY NGUYÊN"*.<br>- Trình diễn hình ảnh xe chủ lực kèm badge công nghệ Blade Battery & e-Platform 3.0.<br>- Bộ nút bấm kép: Cuộn xem các dòng xe & Kích hoạt modal đặt lịch lái thử. |
| **3** | **Brand DNA**<br>`src/components/BrandDna.tsx` | - Giới thiệu triết lý xe năng lượng mới và năng lực công nghệ tự chủ của BYD.<br>- Hệ thống 4 card công nghệ vát góc sắc sảo: *Kỹ nghệ chế tác (Engineering)*, *Hiệu năng thuần điện (Performance)*, *Phát triển bền vững (Sustainability)* và *Công nghệ thông minh (Smart Tech)*. |
| **4** | **Featured Models**<br>`src/components/FeaturedModels.tsx` | - Trưng bày 5 dòng xe chiến lược: **BYD SEAL**, **SEALION 6**, **HAN**, **ATTO 3**, **M6**.<br>- **Bảng màu ngoại thất riêng biệt cho từng dòng xe:** Mỗi xe hiển thị đúng danh sách màu sắc chính hãng của dòng xe đó.<br>- **Cơ chế đổi màu thông minh:** Với các màu có ảnh riêng (như BYD SEAL với 3 màu Xanh Dương, Trắng, Đen), giao diện thực hiện hoạt ảnh trượt từ trên xuống mượt mà (60fps GPU acceleration + cache preload). Với các màu chưa có ảnh riêng, hệ thống tự động giữ nguyên ảnh gốc của xe mà không làm đứt gãy giao diện, đồng thời cập nhật dot màu active và thông báo toast tức thì.<br>- Hiển thị tức thì thông số: Tăng tốc 0-100 km/h, Cự ly hành trình (km), Công suất động cơ và Giá niêm yết dự kiến. |
| **5** | **Performance & Telemetry**<br>`src/components/Performance.tsx` | - Thiết kế màn hình viễn trắc thông số kỹ thuật xe trên nền phong cảnh tuyết băng `model.jpg`.<br>- Hệ số cản gió khí động học siêu thấp ($Cd = 0.219$), thời gian bứt tốc $3.8s$, hệ dẫn động 4 bánh toàn thời gian AWD thông minh. |
| **6** | **Smart Technology**<br>`src/components/SmartTechnology.tsx` | - Trình bày 4 trụ cột công nghệ cốt lõi:<br>  1. Pin phiến lá (Blade Battery): Chống cháy nổ, độ bền triệu km.<br>  2. Nền tảng xe điện e-Platform 3.0.<br>  3. Công nghệ Cell-to-Body (CTB) gia cường độ cứng xoắn thân xe.<br>  4. Hệ thống Hybrid siêu tiết kiệm nhiên liệu DM-i & DM-p. |
| **7** | **Wheel & Chassis Studio**<br>`src/components/WheelStudio.tsx` | - Bệ xoay mâm hợp kim thể thao đa chấu trên nền phẳng liền mạch không đường kẻ ngang.<br>- Trực quan hóa cấu trúc truyền động và hệ thống treo thể thao. |
| **8** | **PreFooter CTA**<br>`src/components/PreFooterCTA.tsx` | - Không gian vòm sáng canopy xe đa dụng BYD M6 sang trọng.<br>- Form đăng ký nhận báo giá lăn bánh, tư vấn tài chính trả góp linh hoạt tại Gia Lai. |
| **9** | **Footer**<br>`src/components/Footer.tsx` | - Tông màu phong cách Aventor Đen Đỏ (`bg-[#050505]`, accent đỏ thể thao `#E53E3E`).<br>- Thông tin liên hệ, giấy phép kinh doanh, bản đồ showroom 337 Phan Đình Phùng, Pleiku.<br>- **Bộ 5 icon mạng xã hội đa sắc:**<br>  • **Zalo:** Vector logo Zalo chính hãng màu xanh thương hiệu (`#0068FF`).<br>  • **Meta / Facebook:** Xanh lam Meta (`#1877F2`).<br>  • **YouTube:** Đỏ YouTube (`#FF0000`).<br>  • **TikTok:** Cyan & Hồng Magenta thời thượng (`#00F2FE` / `#FE2C55`).<br>  • **Google Maps:** Đỏ cam định vị Showroom (`#EA4335`). |
| **10** | **Test Drive Modal**<br>`src/components/TestDriveModal.tsx` | - Thiết kế phong cách Monochrome Minimalist tinh tế & tối giản (nền trắng tinh khiết `bg-white`, chữ đen và xám thanh lịch, không dùng icon hay span).<br>- Bộ chọn 5 dòng xe dạng chip trực quan (SEAL, SEALION 6, HAN, ATTO 3, M6) với trạng thái active đen mờ chuẩn phong cách Thụy Sĩ / Bắc Âu.<br>- Nút chuyển đổi địa điểm (Showroom Pleiku / Lái thử tận nơi Gia Lai), lựa chọn khung giờ và form liên hệ tinh giản không cần cuộn trang.<br>- Màn hình thông báo đăng ký thành công đồng bộ tối giản và thanh lịch. |
| **11** | **Quick Contact Widget**<br>`src/components/QuickContact.tsx` | - Nút gọi hotline nổi góc màn hình với vòng sóng radar nhấp nháy.<br>- Nút kết nối Zalo tư vấn 24/7 một chạm dành cho khách hàng truy cập mobile. |

---

## 5. KIẾN TRÚC & CÔNG NGHỆ (ARCHITECTURE & TECH STACK)

### 5.1. Kiến trúc hệ thống
- **Client-Side SPA Architecture:** Ứng dụng hoạt động dựa trên cơ chế nạp trang đơn (Single-Page Application), toàn bộ tương tác, chuyển màu xe và mở modal đều diễn ra tức thì tại trình duyệt mà không cần reload trang.
- **Data-Driven Architecture:** Tách biệt triệt để lớp hiển thị (Presentation Components) và lớp dữ liệu (Data Stores tại `src/data/`), tuân thủ nguyên tắc mã nguồn mở rộng dễ dàng (Scalability).

### 5.2. Công nghệ sử dụng (Technology Stack)

| Thành phần | Công nghệ / Thư viện | Phiên bản | Ghi chú & Mục đích |
| :--- | :--- | :--- | :--- |
| **Core Framework** | React | `^19.3.1` | Bản phát hành mới nhất của React với hiệu năng render tối ưu |
| **Type Safety** | TypeScript | `^7.0.2` | Thiết lập chế độ strict mode, chuẩn hóa giao diện dữ liệu không có lỗi `any` |
| **Bundler & Tooling** | Vite | `^8.3.4` | Tốc độ Hot Module Replacement (HMR) tính bằng mili-giây |
| **Styling Engine** | Tailwind CSS v4 | `^4.3.3` | `@tailwindcss/vite` với cơ chế CSS Variables thế hệ mới |
| **Iconography** | Lucide React | `^1.57.0` | Bộ icon SVG hiện đại, dung lượng cực nhẹ |
| **Brand Vectors** | Inline SVG Vectors | N/A | Logo BYD chính hãng, Zalo official logo, Meta, TikTok |
| **Typography** | Google Fonts | Web CDN | Phông chữ thể thao Urbanist (Heading) + Plus Jakarta Sans (Body) |
| **Build Target** | ESNext (Static Dist) | `dist/` | Đóng gói HTML/CSS/JS thuần, tương thích mọi máy chủ web |

---

## 6. THÔNG TIN TRUY CẬP HỆ THỐNG (SYSTEM ACCESS)

| Hạng mục | Môi trường / Địa chỉ truy cập | Ghi chú |
| :--- | :--- | :--- |
| **Local Development** | `http://localhost:5173/` | Khởi động bằng `npm run dev` |
| **Local Preview (Build)** | `http://localhost:4173/` | Khởi động bằng `npm run preview` |
| **Thư mục đầu ra Production** | `d:\a. đi làm\DUDI\byd\dist\` | Chứa toàn bộ static bundle để đưa lên server |
| **Hotline kỹ thuật dự án** | `0935 889 247` | Hỗ trợ 24/7 từ kỹ sư DUDI |

---

## 7. CẤU TRÚC THƯ MỤC NGUỒN (SOURCE CODE STRUCTURE)

### 7.1. Cây thư mục (Directory Tree)

```text
d:\a. đi làm\DUDI\byd\
├── .gitignore                      # Danh sách file & thư mục loại trừ khỏi Git (node_modules, dist, .env...)
├── index.html                      # File HTML gốc, cấu hình SEO Meta, Viewport và liên kết phông chữ
├── package.json                    # Khai báo dependencies, scripts và cấu hình dự án
├── tsconfig.json                   # Cấu hình TypeScript compiler
├── vite.config.ts                  # Cấu hình Vite bundler & Tailwind CSS v4 plugin
├── README.md                       # Tài liệu bàn giao & vận hành kỹ thuật (file này)
├── public/                         # Thư mục chứa tài nguyên tĩnh public
│   ├── logo/                       # Logo BYD (logo.svg, logo-dark.svg)
│   ├── image/                      # Hình nền Hero, nền tuyết model.jpg, card công nghệ HD
│   ├── tech/                       # Hình ảnh kỹ thuật Pin Blade, DM-i, DM-p, e-Platform
│   ├── SEAL.png                    # Xe BYD SEAL màu xanh dương (mặc định)
│   ├── SEAL_White.png              # Xe BYD SEAL màu trắng tuyết
│   ├── SEAL_Black.png              # Xe BYD SEAL màu đen kim cương
│   ├── Sealion8.png                # Xe SUV BYD SEALION 6
│   ├── HAN.png                     # Xe sedan sang trọng BYD HAN
│   ├── ATTO3.png                   # Xe crossover BYD ATTO 3
│   ├── m6.png                      # Xe đa dụng gia đình BYD M6
│   └── DOLPHIN.png                 # Xe đô thị BYD DOLPHIN
└── src/                            # Mã nguồn chính của ứng dụng
    ├── main.tsx                    # Entry point React 19 gắn kết với DOM root
    ├── vite-env.d.ts               # Khai báo kiểu môi trường Vite
    ├── app/
    │   ├── App.tsx                 # Root layout tích hợp toàn bộ các Section & Modal
    │   └── globals.css             # Import Tailwind CSS v4, keyframes animation trượt đổi màu xe
    ├── components/                 # Các component giao diện độc lập
    │   ├── Navbar.tsx              # Điều hướng, logo BYD, hotline, trigger modal
    │   ├── Hero.tsx                # Hero vát chéo thể thao, tiêu đề Gia Lai, nút CTA
    │   ├── BrandDna.tsx            # Triết lý xe năng lượng mới & 4 card công nghệ
    │   ├── FeaturedModels.tsx      # Trình diễn 5 dòng xe & Bộ chuyển 3 màu xe SEAL (slide trên xuống)
    │   ├── Performance.tsx         # Viễn trắc khí động học & gia tốc trên nền phong cảnh
    │   ├── SmartTechnology.tsx     # Chi tiết Pin Blade, CTB, e-Platform 3.0, DM-i/DM-p
    │   ├── WheelStudio.tsx         # Bệ xoay mâm hợp kim & nền tảng khung gầm
    │   ├── PreFooterCTA.tsx        # Vòm canopy xe M6 & form nhận báo giá lăn bánh
    │   ├── Footer.tsx              # Footer Aventor đen đỏ, thông tin Showroom & 5 icon MXH
    │   ├── TestDriveModal.tsx      # Popup đặt lịch lái thử có kiểm tra hợp lệ số điện thoại
    │   └── QuickContact.tsx        # Nút nổi hotline & Zalo góc phải màn hình
    └── data/                       # Nơi lưu trữ tập trung dữ liệu nội dung (Content Data Stores)
        ├── dealerInfo.ts           # Thông tin đại lý, hotline, địa chỉ 337 Phan Đình Phùng
        ├── showroomData.ts         # Danh sách dòng xe, thông số kỹ thuật, màu sắc, giá bán
        ├── heroData.ts             # Nội dung headline, badge và liên kết phần Hero
        ├── brandDna.ts             # Nội dung 4 card công nghệ Brand DNA
        ├── performanceMetrics.ts   # Chỉ số đo lường hiệu năng vận hành
        ├── ePlatformData.ts        # Thông số cấu trúc mâm xe và khung gầm
        └── footerData.ts           # Liên kết menu footer và dữ liệu cấu hình 5 mạng xã hội
```

### 7.2. Bảng phân quyền & chức năng các thư mục

| Thư mục | Chức năng chi tiết |
| :--- | :--- |
| `public/` | Lưu trữ toàn bộ hình ảnh xe độ nét cao không bị băm tên (hash), icon SVG, ảnh minh họa kỹ thuật |
| `src/app/` | Khởi tạo cấu trúc giao diện toàn trang và định nghĩa stylesheet gốc (`globals.css`) với hiệu ứng slide màu sắc xe |
| `src/components/` | Chứa các module giao diện độc lập, mỗi module quản lý trạng thái riêng và tương thích responsive 100% |
| `src/data/` | Chứa toàn bộ nội dung chữ (copywriting), bảng thông số xe, danh sách liên kết. Giúp lập trình viên bảo trì cập nhật giá bán hoặc hotline tại 1 file duy nhất mà không cần can thiệp vào code JSX |

---

## 8. HƯỚNG DẪN CÀI ĐẶT & VẬN HÀNH (SETUP & OPERATIONS)

### 8.1. Yêu cầu môi trường tối thiểu
- **Hệ điều hành:** Windows 10/11, macOS, hoặc Linux
- **Node.js:** Phiên bản `>= 18.0.0` (Khuyến nghị Node.js `20.x` LTS hoặc `22.x`)
- **Package Manager:** `npm` `>= 9.0.0` hoặc `pnpm` / `yarn`
- **Trình duyệt khuyến nghị:** Chrome, Edge, Safari, Firefox phiên bản hiện đại có hỗ trợ WebGL và CSS Backdrop Filter.

### 8.2. Các bước cài đặt từ đầu (Clean Install)

1. **Di chuyển vào thư mục dự án:**
   ```bash
   cd "d:\a. đi làm\DUDI\byd"
   ```

2. **Cài đặt các gói thư viện (Dependencies):**
   ```bash
   npm install
   ```

3. **Khởi chạy môi trường phát triển (Development Server):**
   ```bash
   npm run dev
   ```
   *Terminal sẽ cung cấp đường link cục bộ:* `http://localhost:5173/`

4. **Kiểm tra kiểm thử và đóng gói bản phát hành (Production Build):**
   ```bash
   npm run build
   ```
   *Quá trình build sẽ biên dịch TypeScript và đóng gói các tệp tĩnh vào thư mục `dist/` mà không phát sinh bất kỳ lỗi lint/type nào.*

5. **Xem thử bản đóng gói (Production Preview):**
   ```bash
   npm run preview
   ```
   *Hệ thống mở web server preview tại:* `http://localhost:4173/`

---

## 9. QUY TẮC PHÁT TRIỂN & TIÊU CHUẨN KỸ THUẬT (DEVELOPMENT RULES)

Nhằm đảm bảo dự án luôn duy trì chất lượng mã nguồn cao cấp nhất, đội ngũ tiếp nhận cần tuân thủ các quy tắc sau:

1. **Tuyệt đối không sử dụng kiểu dữ liệu `any`:**
   - Tất cả props, state, event handler phải được gõ kiểu rõ ràng thông qua TypeScript `interface` hoặc `type`.
2. **Căn chỉnh màn hình di động theo tiêu chuẩn `min-h-dvh`:**
   - Sử dụng `min-h-dvh` kết hợp Flex/Grid thay vì `h-screen` hay `min-h-screen` để tránh lỗi tràn khung hình do thanh địa chỉ động trên iOS Safari và Android Chrome.
3. **Tuân thủ quy tắc tách biệt dữ liệu (Content Separation):**
   - Khi cần đổi giá xe, thông số kỹ thuật, số điện thoại đại lý, hãy chỉnh sửa trong thư mục `src/data/` (ví dụ `dealerInfo.ts`, `showroomData.ts`), không gõ cứng (hardcode) text vào các file component.
4. **Không tạo vạch ngăn cách thô giữa các Section:**
   - Các điểm tiếp giáp giữa `Hero`, `BrandDna`, `FeaturedModels`, `Performance`, `SmartTechnology`, `WheelStudio`, `PreFooterCTA` sử dụng nền đồng màu hoặc hiệu ứng góc cắt vát thể thao (Chamfered Clip-path), tuyệt đối không chèn `border-t border-white/20` gây cảm giác đứt gãy thị giác.
5. **Kích thước bấm cảm ứng tối thiểu (Mobile Ergonomics):**
   - Các nút bấm, icon và liên kết trên mobile phải đạt diện tích chạm tối thiểu $44px \times 44px$.
6. **Tối ưu hoạt ảnh chuyển màu xe (60fps Animation):**
   - Hiệu ứng đổi màu xe BYD SEAL trong `FeaturedModels.tsx` đã được tích hợp cơ chế Preload hình ảnh (`/SEAL.png`, `/SEAL_White.png`, `/SEAL_Black.png`) vào bộ nhớ đệm trình duyệt ngay khi nạp trang, sử dụng CSS GPU transform (`translateY`) kết hợp thuộc tính `will-change: transform, opacity`.

---

## 10. ĐỀ XUẤT NÂNG CẤP HỆ THỐNG (ROADMAP & RECOMMENDATIONS)

| Giai đoạn | Hạng mục nâng cấp | Mô tả chi tiết |
| :---: | :--- | :--- |
| **Giai đoạn 1**<br>*(Hiện tại)* | **Landing Page Digital Showroom** | Hoàn thành toàn diện giao diện, đổi màu xe SEAL 3D slide, form modal lái thử và footer Aventor cao cấp. *(ĐÃ ĐẠT)* |
| **Giai đoạn 2** | **Tích hợp Webhook & CRM Đại lý** | Kết nối trực tiếp form đăng ký lái thử tại `TestDriveModal.tsx` và `PreFooterCTA.tsx` về Google Sheets, Zalo OA hoặc phần mềm CRM nội bộ của BYD Thuận Minh Gia Lai qua RESTful API/Webhook. |
| **Giai đoạn 3** | **Mở rộng bộ đổi màu cho tất cả dòng xe** | Bổ sung thêm các góc chụp và màu sắc cho các dòng xe còn lại (BYD HAN: Đen/Đỏ/Trắng; BYD ATTO 3: Xanh Lục/Trắng/Xám; BYD SEALION 6: Xanh Ngọc/Trắng). |
| **Giai đoạn 4** | **Tính toán chi phí lăn bánh tự động** | Bổ sung module tính toán tiền cọc, biểu phí trước bạ theo khu vực Gia Lai / Kon Tum / Đắk Lắk và bảng dự toán trả góp ngân hàng hàng tháng theo lãi suất ưu đãi. |
| **Giai đoạn 5** | **Showroom 3D Canvas / WebGL 360°** | Tích hợp Three.js cho phép khách hàng xoay 360 độ góc nhìn ngoại thất và khám phá toàn cảnh nội thất (Panorama Cockpit) của các mẫu xe. |

---

## 11. LƯU Ý QUAN TRỌNG DÀNH CHO LẬP TRÌNH VIÊN TIẾP NHẬN

> [!IMPORTANT]
> **1. Phiên bản Tailwind CSS v4:**  
> Dự án sử dụng Tailwind CSS v4 với plugin `@tailwindcss/vite`. Cấu hình phong cách và biến màu được định nghĩa trực tiếp trong file `src/app/globals.css` thông qua `@import "tailwindcss";` và quy tắc `@layer`. Không tạo thêm file `tailwind.config.js` truyền thống trừ khi có cấu hình đặc biệt.

> [!NOTE]
> **2. Animation Đổi Màu Xe:**  
> Hoạt ảnh trượt từ trên xuống khi đổi màu xe SEAL được kích hoạt thông qua class `animate-slide-from-top` trong `globals.css`:
> ```css
> @keyframes slideFromTop {
>   0% {
>     opacity: 0;
>     transform: translateY(-40px) scale(0.97);
>   }
>   100% {
>     opacity: 1;
>     transform: translateY(0) scale(1);
>   }
> }
> ```

> [!TIP]
> **3. Chuẩn hóa hình ảnh xe:**  
> Các ảnh xe PNG trong thư mục `public/` cần được giữ ở định dạng tách nền trong suốt (transparent PNG) với chiều ngang từ $1200px$ đến $1600px$ và tối ưu dung lượng dưới $500KB$ để đảm bảo tốc độ tải mượt mà trên mạng 4G/5G di động.

---

## 12. NHÂN SỰ THAM GIA DỰ ÁN

| STT | Họ và tên | Đơn vị | Vai trò trong dự án |
| :---: | :--- | :--- | :--- |
| **1** | **Võ Thành Luận** | DUDI Software | Project Lead & Solution Architect |
| **2** | **Bùi Trí Nguyên** | DUDI Software | Lead Frontend & UI/UX Engineer |
| **3** | **Đội ngũ Kỹ thuật Showroom** | BYD Thuận Minh Gia Lai | Nghiệm thu Kỹ thuật & Cung cấp Tư liệu Xe |

---

## 13. BIÊN BẢN BÀN GIAO & XÁC NHẬN (HANDOVER CONFIRMATION)

- **Trạng thái bàn giao:** Toàn bộ mã nguồn, tài nguyên hình ảnh xe, tài liệu kỹ thuật đã được đóng gói và kiểm thử thành công trên môi trường cục bộ.
- **Ngày bàn giao chính thức:** 16/10/2026.
- **Hình thức nghiệm thu:** Bàn giao mã nguồn Git trực tiếp kèm tài liệu hướng dẫn `README.md`.

```
        ĐẠI DIỆN ĐƠN VỊ BÀN GIAO                           ĐẠI DIỆN ĐƠN VỊ TIẾP NHẬN
           (DUDI SOFTWARE)                               (BYD THUẬN MINH GIA LAI)
          
          Võ Thành Luận                                    Ban Quản Trị Showroom
```
