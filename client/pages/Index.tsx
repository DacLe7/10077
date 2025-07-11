import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import ProductGrid from "@/components/ProductGrid";
import AccessoriesSection from "@/components/AccessoriesSection";
import GiftSetSection from "@/components/GiftSetSection";
import GuideSection from "@/components/GuideSection";
import PlantSizesSection from "@/components/PlantSizesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ReviewSection from "@/components/ReviewSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import WorkshopSection from "@/components/WorkshopSection";
import Footer from "@/components/Footer";
import {
  MessageCircle,
  Shield,
  Truck,
  Award,
  Sparkles,
  Heart,
} from "lucide-react";
import { useState, useRef, useEffect } from 'react';

export default function Index() {
  // State cho chat popup
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Xin chào! Tôi là SaasBot, chuyên gia tư vấn nến thơm. Bạn cần tư vấn mùi hương, quà tặng hay đặt hàng? 😊' }
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (chatOpen && messagesEndRef.current) {
      (messagesEndRef.current as any).scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, chatOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { role: 'user', text: input }]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/.netlify/functions/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { role: 'bot', text: data.text }]);
    } catch (e) {
      setMessages((msgs) => [...msgs, { role: 'bot', text: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau.' }]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> đã được chuyển lên App.tsx, tránh lặp lại */}
      <HeroSection />
      <SocialProofSection />
      <ProductGrid />
      {/* Phụ Kiện Section */}
      <AccessoriesSection />
      {/* Bộ Quà Tặng Section */}
      <GiftSetSection />
      {/* Hướng Dẫn Section */}
      <GuideSection />
      {/* Đa Dạng Kích Thước Section */}
      <PlantSizesSection />
      {/* Về Chúng Tôi Section */}
      <AboutSection />
      {/* Review Section */}
      <ReviewSection />
      {/* Gallery Section */}
      <GallerySection />
      {/* FAQ Section */}
      <FAQSection />
      {/* Workshop Section */}
      <WorkshopSection />
      <Footer />
      {/* Nút chat cũ ở góc phải dưới */}
      {!chatOpen && (
        <button
          className="fixed bottom-6 right-6 bg-primary text-primary-foreground w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
          onClick={() => setChatOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
      {/* Popup chat Gemini */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-[400px] max-w-[98vw] bg-white rounded-2xl shadow-2xl border border-border flex flex-col z-50 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-3 border-b bg-primary/90 rounded-t-2xl">
            <span className="font-bold text-lg text-primary-foreground">SaasBot Tư Vấn Nến Thơm</span>
            <button className="hover:bg-gray-100 rounded-full p-1" onClick={() => setChatOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 20 20"><path d="M6 6l8 8M14 6l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3" style={{ maxHeight: 500, fontSize: '1.05rem' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.role === 'user' ? 'text-right' : 'text-left'}
              >
                <span
                  className={
                    'inline-block px-4 py-2 rounded-2xl shadow-sm ' +
                    (msg.role === 'user'
                      ? 'bg-primary text-white ml-auto'
                      : 'bg-orange-50 text-gray-800 mr-auto')
                  }
                  style={{ maxWidth: '90%', wordBreak: 'break-word', fontSize: '1.05rem' }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <div className="flex items-center gap-3 border-t px-5 py-3 bg-gray-50 rounded-b-2xl">
            <input
              className="flex-1 border rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Nhập câu hỏi..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              style={{ fontSize: '1.05rem' }}
            />
            <button
              className="bg-primary text-white rounded-full p-3 disabled:opacity-50 shadow-md hover:bg-primary/90 transition"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
            >
              <svg width="24" height="24" viewBox="0 0 20 20"><path d="M3 17l13-7-13-7v6h9v2H3v6z" fill="currentColor"/></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
