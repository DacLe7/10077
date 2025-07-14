import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
  type?: 'basic' | 'emotional' | 'product';
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'bot', 
      text: 'Xin chào! Tôi là SaasBot, chuyên gia tư vấn nến thơm. Bạn có thể:\n• Hỏi về sản phẩm: "Nến cho phòng ngủ"\n• Chia sẻ tâm trạng: "Mình buồn"\n• Tư vấn quà tặng: "Quà tặng bạn gái" 😊',
      type: 'basic'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user' as const, text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    
    try {
      const res = await fetch('/.netlify/functions/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: input,
          context: 'candle_consultation'
        }),
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { 
        role: 'bot', 
        text: data.text,
        type: data.type || 'basic'
      }]);
    } catch (e) {
      setMessages((msgs) => [...msgs, { 
        role: 'bot', 
        text: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau.',
        type: 'basic'
      }]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  const getMessageStyle = (msg: ChatMessage) => {
    const baseStyle = 'inline-block px-3 py-2 rounded-lg ';
    if (msg.role === 'user') {
      return baseStyle + 'bg-primary text-white ml-auto';
    }
    
    // Different styles for different bot message types
    switch (msg.type) {
      case 'emotional':
        return baseStyle + 'bg-purple-100 text-purple-800 mr-auto border-l-4 border-purple-500';
      case 'product':
        return baseStyle + 'bg-blue-100 text-blue-800 mr-auto border-l-4 border-blue-500';
      default:
        return baseStyle + 'bg-gray-100 text-gray-800 mr-auto';
    }
  };

  return (
    <>
      {/* Nút mở chat */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 bg-primary text-primary-foreground w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
          onClick={() => setOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
      {/* Popup chat */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 max-w-[95vw] bg-white rounded-xl shadow-2xl border border-border flex flex-col z-50 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span className="font-bold text-primary">SaasBot Tư Vấn Nến Thơm</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2" style={{ maxHeight: 350 }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={
                  msg.role === 'user'
                    ? 'text-right'
                    : 'text-left'
                }
              >
                <span
                  className={getMessageStyle(msg)}
                  style={{ maxWidth: '90%', wordBreak: 'break-word' }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <div className="flex items-center gap-2 border-t px-3 py-2">
            <input
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Nhập câu hỏi hoặc chia sẻ tâm trạng..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <Button size="icon" onClick={sendMessage} disabled={loading || !input.trim()}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
} 