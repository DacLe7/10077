export default function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-amber-dark bg-opacity-80 flex items-center justify-center">
          {/* Placeholder for video - using a gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-dark via-secondary to-primary opacity-90"></div>

          {/* Overlay pattern to simulate plant imagery */}
          <div className="absolute inset-0 opacity-20">
            <div
              className={
                'w-full h-full bg-[url(\'data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E\')]'
              }
            ></div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Nến Thơm Cao Cấp - Tạo Không Gian Hoàn Hảo
            <br />
            <span className="text-3xl md:text-4xl font-normal">
              Hương thơm tự nhiên, chất lượng cao cấp, trải nghiệm tuyệt vời
            </span>
          </h1>
          <button className="bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300 text-lg">
            Khám Phá Bộ Sưu Tập
          </button>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white bg-opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white bg-opacity-40 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white bg-opacity-20 rounded-full animate-pulse delay-700"></div>
    </section>
  );
}
