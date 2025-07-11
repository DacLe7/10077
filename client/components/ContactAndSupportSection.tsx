import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Nến SaaS có an toàn cho sức khỏe không?",
    answer: "Nến SaaS sử dụng nguyên liệu tự nhiên, không chứa hóa chất độc hại, an toàn cho sức khỏe và môi trường."
  },
  {
    question: "Làm sao để chọn mùi hương phù hợp với tâm trạng?",
    answer: "Bạn có thể sử dụng chatbot tư vấn hoặc thử quiz chọn nến theo mood trên website để được gợi ý mùi hương và playlist phù hợp."
  },
  {
    question: "Tôi có thể tự thiết kế nến/quà tặng không?",
    answer: "Bạn có thể chọn dịch vụ custom, nhập lời nhắn, chọn màu, hộp quà và playlist nhạc riêng cho món quà của mình."
  },
  {
    question: "Workshop sáng tạo mùi hương tổ chức ở đâu?",
    answer: "Workshop được tổ chức định kỳ tại các quán cà phê đối tác ở TP.HCM. Bạn có thể đăng ký trước trên website hoặc fanpage."
  },
  {
    question: "Có giao hàng toàn quốc không?",
    answer: "SaaS Candle hỗ trợ giao hàng toàn quốc, miễn phí với đơn từ 500K." 
  }
];

const socialMedia = [
  { name: "Facebook", icon: "📘", url: "#" },
  { name: "Instagram", icon: "📷", url: "#" },
  { name: "TikTok", icon: "🎵", url: "#" },
  { name: "YouTube", icon: "📺", url: "#" }
];

export default function ContactAndSupportSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="lien-he" className="py-20 px-4 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-4 text-left mb-8">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span><span className="font-semibold">Địa Chỉ:</span> <a href="https://maps.app.goo.gl/yDDv1ZEaT4Lat1Jp9" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80 ml-1">123 Đường ABC, Quận 1, TP.HCM (Xem bản đồ)</a></span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span><span className="font-semibold">Số Điện Thoại:</span> 0901 234 567 <span className="text-xs text-muted-foreground">(Hỗ trợ 24/7)</span></span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span><span className="font-semibold">Email:</span> info@saascandle.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <span><span className="font-semibold">Giờ Làm Việc:</span> 8:00 - 22:00 (Thứ 2 - Chủ nhật)</span>
          </div>
        </div>
        <div className="mb-8">
          <div className="font-semibold mb-2">Kết Nối Với Chúng Tôi</div>
          <div className="flex justify-center gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl hover:bg-primary hover:text-primary-foreground transition">📘</a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl hover:bg-primary hover:text-primary-foreground transition">📷</a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl hover:bg-primary hover:text-primary-foreground transition">🎵</a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl hover:bg-primary hover:text-primary-foreground transition">📺</a>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <span className="text-2xl font-bold text-primary">SaaS</span>
            <span className="text-muted-foreground text-sm">© 2025 Tất cả quyền được bảo lưu ok la</span>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Chính Sách Bảo Mật</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Điều Khoản Sử Dụng</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Chính Sách Cookie</a>
          </div>
        </div>
      </div>
    </section>
  );
} 