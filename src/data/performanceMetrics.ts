export interface PerformanceMetric {
  value: string;
  unit: string;
  label: string;
}

export const PERFORMANCE_METRICS: PerformanceMetric[] = [
  { value: "3.8", unit: "s", label: "Tăng tốc 0-100 km/h" },
  { value: "180", unit: "km/h", label: "Tốc độ tối đa an toàn" },
  { value: "530", unit: "hp", label: "Công suất tối đa" },
  { value: "1.200", unit: "km", label: "Tầm vận hành hỗn hợp" },
  { value: "82.5", unit: "kwh", label: "Dung lượng Pin Blade" },
  { value: "28", unit: "min", label: "Sạc nhanh 30% - 80% DC" }
];
