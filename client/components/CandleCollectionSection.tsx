export default function CandleCollectionSection() {
  const collections = [
    {
      name: "Hương Hoa",
      description: "Ngọt ngào, thơm mát",
      scents: "Hoa Hồng, Lavender, Jasmine",
      gradient: "from-pink-200 to-purple-300",
    },
    {
      name: "Hương Trái Cây",
      description: "Tươi mát, sảng khoái",
      scents: "Cam Chanh, Dâu Tây, Táo Xanh",
      gradient: "from-orange-200 to-red-300",
    },
    {
      name: "Hương Gỗ",
      description: "Ấm áp, sang trọng",
      scents: "Gỗ Đàn Hương, Cedar, Vanilla",
      gradient: "from-amber-200 to-yellow-400",
    },
    {
      name: "Hương Biển",
      description: "Mát mẻ, thư giãn",
      scents: "Ocean Breeze, Sea Salt, Cotton",
      gradient: "from-blue-200 to-teal-300",
    },
  ];

  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bộ Sưu Tập Hương Thơm
          </h2>
          <p className="text-xl text-muted-foreground">
            Khám phá đa dạng hương thơm cho mọi không gian sống
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div
                className={`h-48 bg-gradient-to-br ${collection.gradient} p-6 flex items-end relative`}
              >
                {/* Candle illustration */}
                <div className="absolute top-6 right-6">
                  <div className="w-8 h-12 bg-white bg-opacity-90 rounded-sm relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-1 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-1">{collection.name}</h3>
                  <p className="text-white text-opacity-90 text-sm">
                    {collection.description}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-3">
                  {collection.scents}
                </p>
                <button className="mt-3 text-primary font-medium hover:text-secondary transition-colors">
                  Xem Thêm →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Collections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group cursor-pointer bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-primary via-secondary to-amber-dark p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Bộ Quà Tặng</h3>
                <p className="text-lg text-white text-opacity-90 mb-6">
                  Set nến thơm cao cấp trong hộp đặc biệt
                </p>
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Khám Phá Ngay
                </button>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Limited Edition</h3>
                <p className="text-lg text-white text-opacity-90 mb-6">
                  Phiên bản giới hạn với hương thơm độc đáo
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Sở Hữu Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
