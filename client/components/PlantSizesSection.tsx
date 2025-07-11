export default function PlantSizesSection() {
  const sizes = [
    {
      name: "Nhỏ",
      description: "Hoàn hảo cho bàn làm việc & kệ sách",
      burnTime: "20-30 giờ",
      gradient: "from-amber-200 to-amber-300",
    },
    {
      name: "Trung Bình",
      description: "Tuyệt vời cho bàn trà & phòng khách",
      burnTime: "40-50 giờ",
      gradient: "from-amber-300 to-amber-400",
    },
    {
      name: "Lớn",
      description: "Tuyên bố cho không gian rộng",
      burnTime: "60-80 giờ",
      gradient: "from-amber-400 to-amber-500",
    },
    {
      name: "Đặc Biệt",
      description: "Tác phẩm nghệ thuật cho không gian sang trọng",
      burnTime: "100+ giờ",
      gradient: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Đa Dạng Kích Thước
          </h2>
          <p className="text-xl text-muted-foreground">
            Từ nến nhỏ cho bàn làm việc đến nến lớn cho không gian rộng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sizes.map((size, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div
                className={`h-48 bg-gradient-to-br ${size.gradient} p-6 flex items-end relative`}
              >
                {/* Candle illustration */}
                <div className="absolute top-6 right-6">
                  <div className="w-8 h-12 bg-white bg-opacity-90 rounded-sm relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-1 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-1">{size.name}</h3>
                  <p className="text-white text-opacity-90 text-sm">
                    {size.burnTime}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{size.description}</p>
                <button className="mt-3 text-primary font-medium hover:text-secondary transition-colors">
                  Mua {size.name} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
