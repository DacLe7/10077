import { Flame, Scissors, Package, Shield } from "lucide-react";

export default function AccessoriesSection() {
  const accessories = [
    {
      name: "Bật Lửa Cao Cấp",
      description: "Bật lửa an toàn, thiết kế đẹp mắt",
      price: "150.000đ",
      image: "🔥",
      icon: Flame,
    },
    {
      name: "Kéo Cắt Bấc",
      description: "Dụng cụ cắt bấc chuyên nghiệp",
      price: "80.000đ",
      image: "✂️",
      icon: Scissors,
    },
    {
      name: "Khay Đựng Nến",
      description: "Khay gốm sứ cao cấp, chống nóng",
      price: "200.000đ",
      image: "🕯️",
      icon: Package,
    },
    {
      name: "Dụng Cụ Dập Lửa",
      description: "Dập lửa an toàn, không khói",
      price: "120.000đ",
      image: "🛡️",
      icon: Shield,
    },
  ];

  return (
    <section id="phu-kien" className="py-20 px-4 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Phụ Kiện Nến Thơm
          </h2>
          <p className="text-xl text-muted-foreground">
            Các phụ kiện giúp trải nghiệm nến thơm trọn vẹn hơn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 p-6 flex items-center justify-center">
                  <span className="text-6xl">{item.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <IconComponent className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {item.price}
                    </span>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all">
                      Mua Ngay
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 