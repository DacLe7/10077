import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Thông tin liên hệ gọn đẹp */}
        <div className="space-y-4 text-left mb-8">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span>
              <span className="font-semibold">Địa Chỉ:</span>
              <a
                href="https://maps.app.goo.gl/yDDv1ZEaT4Lat1Jp9"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary hover:text-primary/80 ml-1"
              >
                123 Đường ABC, Quận 1, TP.HCM (Xem bản đồ)
              </a>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span><span className="font-semibold">Số Điện Thoại:</span> 0901 234 567 <span className="text-xs text-muted-foreground">(Hỗ trợ 24/7)</span></span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span><span className="font-semibold">Email:</span> info@saascandle.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <span><span className="font-semibold">Giờ Làm Việc:</span> 8:00 - 22:00 (Thứ 2 - Chủ nhật)</span>
          </div>
        </div>
        <div className="mb-8">
          <div className="font-semibold mb-2">Kết Nối Với Chúng Tôi</div>
          <div className="flex justify-center gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl hover:bg-primary hover:text-primary-foreground transition">📘</a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl hover:bg-primary hover:text-primary-foreground transition">📷</a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl hover:bg-primary hover:text-primary-foreground transition">🎵</a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl hover:bg-primary hover:text-primary-foreground transition">📺</a>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <span className="text-2xl font-bold text-primary">CandleVie</span>
            <span className="text-muted-foreground text-sm">© 2024 Tất cả quyền được bảo lưu</span>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Chính Sách Bảo Mật</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Điều Khoản Sử Dụng</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Chính Sách Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
