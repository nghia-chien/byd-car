export interface EPlatformPillar {
  id: string;
  title: string;
  description: string;
}

export const E_PLATFORM_DATA = {
  headline: "Nền Tảng e-Platform 3.0",
  subheading: "Phát huy tất cả ưu điểm về sự thông minh, hiệu quả, an toàn và tính thẩm mỹ mà công nghệ điện hóa mang lại.",
  image: "/tech/e-Platform.png",
  pillars: [
    {
      id: "safety",
      title: "An Toàn",
      description: "Được trang bị bộ pin Blade an toàn đồng thời tích hợp vào thân xe với công nghệ CTB (Cell-to-body), nền tảng e-Platform 3.0 tạo nên cấu trúc khung thuần điện đặc biệt để tăng độ cứng vững cho xe."
    },
    {
      id: "efficiency",
      title: "Hiệu Quả Cao",
      description: "Hệ thống truyền động điện '8 trong 1' đầu tiên thế giới giúp tối ưu hiệu suất, mở rộng tầm di chuyển lên đến 1.000 km trong một lần sạc và giảm mức tiêu thụ năng lượng thấp hơn 10%."
    },
    {
      id: "intelligence",
      title: "Thông Minh",
      description: "Hệ thống điều khiển và hệ điều hành BYD OS giúp hỗ trợ lái xe thông minh ở mức độ cao. Việc tách rời phần cứng và phần mềm giúp phương tiện nhận được cải tiến liên tục một cách dễ dàng."
    },
    {
      id: "aesthetics",
      title: "Thẩm Mỹ",
      description: "Thân xe với phần nhô ra ngắn hơn kết hợp cùng chiều dài cơ sở dài hơn giúp mở rộng đáng kể không gian bên trong, đồng thời tối ưu thiết kế khí động học giảm hệ số cản gió giúp xe vận hành tốt hơn."
    }
  ] as EPlatformPillar[]
};
