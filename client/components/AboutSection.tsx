import { Heart, Award, Users, Target, Shield, Star } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Tình Yêu Với Hương Thơm",
      description: "Chúng tôi tin rằng mỗi hương thơm đều có câu chuyện riêng và khả năng tạo nên những khoảnh khắc đặc biệt."
    },
    {
      icon: Award,
      title: "Chất Lượng Cao Cấp",
      description: "Cam kết sử dụng nguyên liệu tự nhiên 100%, không chứa hóa chất độc hại, an toàn cho sức khỏe."
    },
    {
      icon: Users,
      title: "Phục Vụ Khách Hàng",
      description: "Đội ngũ tư vấn chuyên nghiệp, sẵn sàng hỗ trợ khách hàng lựa chọn hương thơm phù hợp."
    }
  ];

  const team = [
    {
      name: "Nguyễn Thị Anh",
      role: "Founder & CEO",
      description: "Chuyên gia hương liệu với 10 năm kinh nghiệm trong ngành nến thơm.",
      image: "👩‍💼"
    },
    {
      name: "Trần Văn Bình",
      role: "Head of Production",
      description: "Kỹ sư hóa học, đảm bảo chất lượng sản phẩm đạt tiêu chuẩn quốc tế.",
      image: "👨‍🔬"
    },
    {
      name: "Lê Thị Cẩm",
      role: "Creative Director",
      description: "Nhà thiết kế tài năng, tạo nên những sản phẩm nến thơm độc đáo.",
      image: "👩‍🎨"
    }
  ];

  return (
    <section id="ve-chung-toi" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Về Saas Candle
          </h2>
          <p className="text-xl text-muted-foreground">
            Sứ mệnh, giá trị và câu chuyện thương hiệu của chúng tôi
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Câu Chuyện Thương Hiệu
            </h3>
            <p className="text-muted-foreground mb-4">
              Saas Candle được thành lập vào năm 2020 với tình yêu đặc biệt dành cho hương thơm tự nhiên. 
              Chúng tôi bắt đầu từ một xưởng nhỏ với ước mơ mang đến những trải nghiệm hương thơm tuyệt vời 
              cho mọi người.
            </p>
            <p className="text-muted-foreground mb-6">
              Từ những ngày đầu, chúng tôi đã cam kết sử dụng 100% nguyên liệu tự nhiên, 
              không chứa hóa chất độc hại. Mỗi sản phẩm đều được tạo ra với sự tận tâm và 
              chú ý đến từng chi tiết nhỏ nhất.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">5+ năm kinh nghiệm</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">10,000+ khách hàng</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="w-full h-64 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <span className="text-6xl">🕯️</span>
                <p className="text-lg font-semibold mt-4">Saas Candle</p>
                <p className="text-sm opacity-90">Since 2020</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Giá Trị Cốt Lõi
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Đội Ngũ Sáng Lập
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{member.image}</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="mt-20 bg-primary/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Cam Kết Chất Lượng
            </h3>
            <p className="text-muted-foreground">
              Chúng tôi cam kết mang đến những sản phẩm nến thơm chất lượng cao nhất
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">An Toàn 100%</h4>
              <p className="text-sm text-muted-foreground">Không chứa hóa chất độc hại</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Chất Lượng Cao</h4>
              <p className="text-sm text-muted-foreground">Nguyên liệu tự nhiên cao cấp</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Kiểm Soát Nghiêm Ngặt</h4>
              <p className="text-sm text-muted-foreground">Quy trình sản xuất tiêu chuẩn</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Tận Tâm Phục Vụ</h4>
              <p className="text-sm text-muted-foreground">Hỗ trợ khách hàng 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 