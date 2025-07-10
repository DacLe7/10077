const logos = [
  "Elle Decoration",
  "House & Garden",
  "Luxury Lifestyle",
  "Home & Design",
  "Interior Magazine",
  "Style at Home",
];

export default function SocialProofSection() {
  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Statistics */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Hơn 100,000 Khách Hàng Hài Lòng
          </h2>

          {/* Testimonial Bubble */}
          <div className="inline-block bg-card rounded-xl px-8 py-6 shadow-sm border border-border max-w-2xl">
            <p className="text-lg text-muted-foreground italic">
              "Nến thơm Saas mang đến không gian thư giãn hoàn hảo cho gia
              đình tôi. Hương thơm tự nhiên và thời gian cháy lâu dài."
            </p>
            <p className="text-sm text-primary font-semibold mt-3">
              — Chị Minh Anh, Hà Nội
            </p>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 mb-4">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-muted-foreground font-medium text-lg whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Được giới thiệu trên các tạp chí lifestyle hàng đầu
          </p>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          `
        }} />
      </div>
    </section>
  );
}
