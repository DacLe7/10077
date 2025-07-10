import { Flame, Scissors, Shield, Package, Clock, AlertTriangle } from "lucide-react";

export default function GuideSection() {
  const guides = [
    {
      title: "Cách Đốt Nến Lần Đầu",
      description: "Đảm bảo nến cháy đều và an toàn từ lần đầu sử dụng",
      icon: Flame,
      steps: [
        "Đặt nến trên bề mặt phẳng, ổn định",
        "Đốt nến trong 2-3 giờ đầu tiên",
        "Để nến cháy đến khi sáp tan đều bề mặt",
        "Không di chuyển nến khi đang cháy"
      ],
      tip: "Lần đầu đốt nến rất quan trọng để tạo 'memory ring' - vòng tròn cháy đều."
    },
    {
      title: "Cách Cắt Bấc",
      description: "Cắt bấc đúng cách giúp nến cháy hiệu quả hơn",
      icon: Scissors,
      steps: [
        "Cắt bấc còn lại 0.5-1cm",
        "Sử dụng kéo cắt bấc chuyên dụng",
        "Cắt bấc trước khi đốt nến",
        "Loại bỏ tàn bấc sau khi dập lửa"
      ],
      tip: "Bấc quá dài sẽ tạo ngọn lửa lớn, bấc quá ngắn sẽ khó đốt."
    },
    {
      title: "Lưu Ý An Toàn",
      description: "Những điều cần nhớ để sử dụng nến an toàn",
      icon: Shield,
      steps: [
        "Không để nến cháy quá 4 giờ liên tục",
        "Đặt nến cách xa vật dễ cháy ít nhất 30cm",
        "Không đặt nến gần cửa sổ có gió",
        "Không để trẻ em và thú cưng gần nến đang cháy"
      ],
      tip: "Luôn dập lửa nến trước khi rời khỏi phòng hoặc đi ngủ."
    },
    {
      title: "Cách Bảo Quản Nến",
      description: "Giữ nến thơm luôn tươi mới và hiệu quả",
      icon: Package,
      steps: [
        "Bảo quản nến ở nơi khô ráo, mát mẻ",
        "Tránh ánh nắng trực tiếp",
        "Đóng nắp hộp sau khi sử dụng",
        "Không để nến gần nguồn nhiệt"
      ],
      tip: "Nến được bảo quản tốt có thể giữ hương thơm đến 2 năm."
    }
  ];

  return (
    <section id="huong-dan" className="py-20 px-4 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hướng Dẫn Sử Dụng & Bảo Quản Nến
          </h2>
          <p className="text-xl text-muted-foreground">
            Mẹo sử dụng nến thơm an toàn, hiệu quả và kéo dài tuổi thọ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => {
            const IconComponent = guide.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {guide.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {guide.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {guide.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                        {stepIndex + 1}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Mẹo:</span> {guide.tip}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Warning */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
            <h3 className="text-lg font-semibold text-red-800">
              Lưu Ý An Toàn Quan Trọng
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-red-700">
            <ul className="space-y-2">
              <li>• Không bao giờ để nến cháy khi không có người trông coi</li>
              <li>• Không đặt nến gần rèm, giấy hoặc vật liệu dễ cháy</li>
            </ul>
            <ul className="space-y-2">
              <li>• Đảm bảo phòng thông thoáng khi sử dụng nến</li>
              <li>• Dập lửa nến bằng dụng cụ chuyên dụng</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 