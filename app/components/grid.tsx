import Image from "next/image";
import React from "react";

const gridImages = [
  { src: "/g1.webp" },
  { src: "/g2.webp" },
  { src: "/g3.webp" },
  { src: "/g4.avif" },
  { src: "/g5.avif" },
  { src: "/g6.avif" },
];

export default function GridComp() {
  return (
    <div className="pt-24 min-h-screen w-screen px-8 bg-gray-100 pb-16 overflow-hidden">
      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
        {gridImages.map((item, index) => (
          <div key={index} className="w-full">
            <Image
              src={item.src}
              alt="gridimages"
              width={700}
              height={700}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
