"use client";
import { error } from "console";
import React, { useRef } from "react";

export default function Home() {
  const leftVideoRef = useRef<HTMLVideoElement | null>(null);
  const rightVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnterLeft = () => {
    if (leftVideoRef.current) {
      leftVideoRef.current.play();
    }
  };

  const handleMouseLeaveLeft = () => {
    if (leftVideoRef.current) {
      leftVideoRef.current.pause();
    }
  };
  const handleMouseEnterRight = () => {
    if (rightVideoRef.current) {
      rightVideoRef.current.play();
    }
  };

  const handleMouseLeaveRight = () => {
    if (rightVideoRef.current) {
      rightVideoRef.current.pause();
    }
  };
  return (
    <div className="h-[100vh] w-full overflow-hidden">
      <div className="flex relative inset-0">
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnterLeft()}
          onMouseLeave={() => handleMouseLeaveLeft()}
        >
          <video
            loop
            muted
            src={"/left.mp4"}
            className="object-cover w-screen -z-50"
            ref={leftVideoRef}
          />
          <div className="absolute inset-0  flex flex-col justify-center items-center pt-92 gap-y-2">
            <p className="text-white text-4xl tracking-tight">
              Fashion & Accessories
            </p>
            <p className="text-white tracking-tight underline">Learn more</p>
          </div>
          <div className="absolute bg-black/50 inset-0 group-hover:opacity-0 transition-opacity duration-300 group-hover:cursor-pointer z-10"></div>
        </div>
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnterRight()}
          onMouseLeave={() => handleMouseLeaveRight()}
        >
          <video
            loop
            muted
            src={"/right.mp4"}
            className="object-cover w-screen -z-50"
            ref={rightVideoRef}
          />
          <div className="absolute inset-0  flex flex-col justify-center items-center pt-92 gap-y-2">
            <p className="text-white text-4xl tracking-tight">
              Fragrance & Beauty
            </p>
            <p className="text-white tracking-tight underline">Learn more</p>
          </div>
          <div className="absolute bg-black/50 inset-0 group-hover:opacity-0 transition-opacity duration-300 group-hover:cursor-pointer z-10"></div>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-8xl font-nicolas tracking-tighter z-50">
          DIOR
        </h1>
      </div>
    </div>
  );
}
