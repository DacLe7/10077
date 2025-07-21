import React from "react";

const albums = [
  {
    image: "https://seeded-session-images.scdn.co/v1/img/track/3lVDAf6zKzf9BT6MUaW33u/en",
    title: "Feeling Happy 😁 | Upbeat Dance...",
    artist: "By Be Yourself Music",
  },
  {
    image: "https://tse1.mm.bing.net/th/id/OIP.dNjAyHeMuncJ8FBcKiU8OgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Warm Fuzzy Feeling",
    artist: "By Spotify",
  },
  {
    image: "https://i1.sndcdn.com/artworks-1jFEyXoXXmBy7PpX-qFuWDQ-t500x500.jpg",
    title: "Nhạc suy =))",
    artist: "By Mt Cutii",
  },
  {
    image: "https://i.scdn.co/image/ab67706f000000023845b3bd806572ce6b374d0a",
    title: "Feeling – Altero",
    artist: "By Lawrence James",
  },
  {
    image: "https://i.scdn.co/image/ab67706f0000000284e8231bc64dd2a19ae047b5",
    title: "Positive Feelings Positive Morning",
    artist: "By Chill Moment",
  },
  {
    image: "https://i.scdn.co/image/ab67706f0000000218a8be9430e87bfed7422656",
    title: "Nhạc suy nhưng hay vl 🤯🍌",
    artist: "By Bianca_UwU",
  },
];

export default function MusicAlbumRow() {
  return (
    <div className="w-full bg-[#f4ece7] py-10 px-2 mb-10">
      <div className="max-w-[95vw] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Feeling playlist</h2>
          <p className="text-xl text-muted-foreground">Tận hưởng bản thân cùng âm nhạc</p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {albums.map((album, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-48 rounded-lg bg-[#222] shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <div className="text-white font-semibold text-base truncate mb-1">
                  {album.title}
                </div>
                <div className="text-gray-400 text-sm truncate">
                  {album.artist}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 