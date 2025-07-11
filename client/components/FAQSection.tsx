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

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Câu Hỏi Thường Gặp</h2>
        <p className="text-muted-foreground">Bạn thắc mắc về nến, playlist, workshop hay dịch vụ? Xem ngay các câu hỏi phổ biến dưới đây!</p>
      </div>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-border rounded-lg bg-card">
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
    </section>
  );
} 