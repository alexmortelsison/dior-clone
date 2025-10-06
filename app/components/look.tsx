import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import React from "react";

const images = [
  { src: "/s1.avif" },
  { src: "/s2.avif" },
  { src: "/s3.avif" },
  { src: "/s4.avif" },
  { src: "/s5.avif" },
  { src: "/s6.avif" },
];

export default function Look() {
  return (
    <div className="h-[100vh] w-screen pt-24 pb-24 justify-center items-center flex flex-col bg-gray-100">
      <h1 className="text-4xl font-sans">look</h1>
      <div className="pt-8 px-48 h-full">
        <ScrollArea>
          <div className="flex space-x-6 bg-gray-100 w-full">
            {images.map((item, index) => (
              <div key={index} className=" shrink-0">
                <Image
                  src={item.src}
                  width={500}
                  height={800}
                  alt="images"
                  className="object-cover inset-0 pb-8"
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
