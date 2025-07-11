import { Flame, Heart, Clock } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="bg-background-secondary py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cách Sử Dụng Nến Thơm
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tận hưởng hương thơm tuyệt vời với cách sử dụng đơn giản
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Step 1 */}
          <div className="order-1 md:order-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Flame className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Châm lửa và thư giãn
                </h3>
                <p className="text-muted-foreground text-lg">
                  Châm lửa đều hai đầu tim nến để có mặt cháy đều đẹp. Để nến
                  cháy tối đa 4 tiếng trong lần đầu sử dụng.
                </p>
              </div>
            </div>
          </div>
          <div className="order-2 md:order-2">
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="w-full h-48 bg-gradient-to-br from-warm-100 to-warm-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Flame className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Châm Lửa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="order-4 md:order-3">
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="w-full h-48 bg-gradient-to-br from-amber-dark to-secondary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-16 w-16 text-white mx-auto mb-4" />
                  <p className="text-white">Thư Giãn</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-3 md:order-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Tận hưởng hương thơm tuyệt vời
                </h3>
                <p className="text-muted-foreground text-lg">
                  Hương thơm tự nhiên lan tỏa khắp không gian, mang đến cảm giác
                  thư giãn và ấm cúng cho ngôi nhà của bạn.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional benefit */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 bg-card px-6 py-4 rounded-lg shadow-sm border border-border">
            <Clock className="h-6 w-6 text-primary" />
            <span className="text-foreground font-medium">
              Thời gian cháy lên đến 50 giờ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
