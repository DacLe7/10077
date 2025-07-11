import { useState } from "react";

export default function WorkshopSection() {
  return (
    <section className="bg-background-secondary py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Workshop Sáng Tạo Mùi Hương Cá Nhân Hóa</h2>
        <p className="text-muted-foreground mb-6">
          Lịch workshop và đăng ký sẽ được thông báo trên các nền tảng mạng xã hội của nhóm OXY (Facebook, Zalo...).
          <br />
          <span className="font-semibold text-primary">Hãy tham gia nhóm Facebook để nhận thông báo mới nhất!</span>
        </p>
        <a
          href="https://www.facebook.com/photo?fbid=1286309686617707&set=a.248630273718992"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
        >
          Tham gia nhóm Facebook OXY
        </a>
      </div>
    </section>
  );
} 