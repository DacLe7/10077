export default function GallerySection() {
  const images = [
    { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", caption: "Không gian decor với nến SaaS" },
    { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", caption: "Workshop sáng tạo mùi hương" },
    { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", caption: "Nến custom làm quà tặng" },
    { url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80", caption: "Khách hàng trải nghiệm playlist nhạc" },
    { url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", caption: "Không gian quán cà phê với nến SaaS" },
    { url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", caption: "Góc thư giãn tại nhà" },
  ];
  return (
    <section className="bg-background-secondary py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ảnh Thực Tế & Trải Nghiệm</h2>
        <p className="text-muted-foreground">Một số khoảnh khắc thực tế từ khách hàng, workshop và không gian sử dụng nến SaaS Candle.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((img, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow group">
            <img src={img.url} alt={img.caption} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
            <div className="bg-white px-3 py-2 text-center text-sm text-muted-foreground">{img.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 