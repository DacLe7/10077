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
    <section className="py-20 px-4 bg-background-secondary">
      <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-lg p-10">
        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Câu Hỏi Thường Gặp</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border rounded-lg bg-background">
                <button
                  className="w-full text-left px-6 py-4 font-semibold text-foreground flex justify-between items-center focus:outline-none"
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  {faq.question}
                  <span className={"ml-2 transition-transform " + (open === idx ? "rotate-90" : "rotate-0")}>▶</span>
                </button>
                {open === idx && (
                  <div className="px-6 pb-4 text-muted-foreground text-sm animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-border" />
        {/* Workshop */}
        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold mb-2">Workshop Sáng Tạo Mùi Hương Cá Nhân Hóa</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Lịch workshop & đăng ký sẽ được thông báo trên các nền tảng mạng xã hội của nhóm OXY (Facebook, Zalo...).
            <br />
            <span className="font-semibold text-primary">Hãy tham gia nhóm Facebook để nhận thông báo mới nhất!</span>
          </p>
          <a
            href="https://facebook.com/groups/tennhomoxy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Tham gia nhóm Facebook OXY
          </a>
        </div>
        <hr className="my-6 border-border" />
        {/* Liên Hệ */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Liên Hệ</h2>
          <p className="text-muted-foreground mb-6">Kênh liên hệ, hỗ trợ khách hàng</p>
          <div className="w-full max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Cột trái - Thông tin liên hệ */}
            <div className="space-y-4 text-left">
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
          </div>
        </div>
      </div>
    </section>
  );
} 