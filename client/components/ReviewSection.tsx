export default function ReviewSection() {
  const reviews = [
    {
      name: "Minh Anh",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      content: "Nến thơm SaaS mang lại cảm giác thư giãn tuyệt vời, mùi hương rất tự nhiên và playlist nhạc cực chill!"
    },
    {
      name: "Hải Đăng",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      content: "Tôi rất thích dịch vụ tư vấn chọn nến theo cảm xúc, quà tặng cũng rất ý nghĩa."
    },
    {
      name: "Thu Trang",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
      content: "Workshop sáng tạo mùi hương rất vui, mình đã tự làm được nến mang dấu ấn riêng!"
    }
  ];
  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Khách Hàng Nói Gì Về SaaS Candle?</h2>
        <p className="text-muted-foreground">Một số cảm nhận thực tế từ khách hàng đã trải nghiệm sản phẩm và dịch vụ của chúng tôi.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reviews.map((r, idx) => (
          <div key={idx} className="bg-card rounded-xl shadow p-6 flex flex-col items-center">
            <img src={r.avatar} alt={r.name} className="w-16 h-16 rounded-full mb-3 object-cover" />
            <h3 className="font-semibold mb-1">{r.name}</h3>
            <div className="flex mb-2">
              {Array.from({length: r.rating}).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              {Array.from({length: 5 - r.rating}).map((_, i) => <span key={i} className="text-gray-300">★</span>)}
            </div>
            <p className="text-muted-foreground text-sm">{r.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 