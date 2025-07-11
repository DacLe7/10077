import { Gift, Heart, Star, Package } from "lucide-react";

export default function GiftSetSection() {
  const giftSets = [
    {
      name: "Set 3 Nến Thơm",
      description: "Bộ 3 nến hương thơm phổ biến nhất",
      price: "350.000đ",
      originalPrice: "600.000đ",
      image: "🎁",
      features: ["3 nến thơm cao cấp", "Hộp quà sang trọng", "Thẻ chúc mừng"],
      popular: true,
    },
    {
      name: "Nến + Phụ Kiện",
      description: "Nến thơm kèm bộ phụ kiện đầy đủ",
      price: "150.000đ",
      originalPrice: "400.000đ",
      image: "🕯️",
      features: ["1 nến thơm cao cấp", "Bật lửa + kéo cắt bấc", "Khay đựng nến"],
      popular: false,
    },
    {
      name: "Hộp Quà Cá Nhân Hóa",
      description: "Set quà tặng có thể tùy chỉnh theo yêu cầu",
      price: "400.000đ",
      originalPrice: "800.000đ",
      image: "💝",
      features: ["2-3 nến theo lựa chọn", "Phụ kiện đầy đủ", "Hộp quà cá nhân hóa"],
      popular: false,
    },
  ];

  return (
    <section id="bo-qua-tang" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bộ Quà Tặng Cao Cấp
          </h2>
          <p className="text-xl text-muted-foreground">
            Set nến thơm sang trọng, lựa chọn hoàn hảo cho mọi dịp đặc biệt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {giftSets.map((set, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg border border-border hover:shadow-xl transition-all duration-300 overflow-hidden relative ${
                set.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {set.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  Phổ Biến
                </div>
              )}
              
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 p-6 flex items-center justify-center">
                <span className="text-6xl">{set.image}</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Gift className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {set.name}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {set.description}
                </p>
                
                <div className="mb-4">
                  <ul className="space-y-2">
                    {set.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Heart className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      {set.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      {set.originalPrice}
                    </span>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center">
                  <Package className="h-5 w-5 mr-2" />
                  Khám Phá Ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 