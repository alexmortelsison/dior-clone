import React from "react";

export default function Home() {
  return (
    <div className="h-[100vh] w-full overflow-hidden">
      <div className="flex relative inset-0">
        <div className="relative">
          <video src={"/left.mp4"} className="object-cover w-screen -z-50" />
          <div className="absolute inset-0  flex flex-col justify-center items-center pt-92 gap-y-2">
            <p className="text-white text-4xl tracking-tight">
              Fashion & Accessories
            </p>
            <p className="text-white tracking-tight underline">Learn more</p>
          </div>
          <div className="absolute bg-black/50 inset-0"></div>
        </div>
        <div className="relative">
          <video src={"/right.mp4"} className="object-cover w-screen -z-50" />
          <div className="absolute inset-0  flex flex-col justify-center items-center pt-92 gap-y-2">
            <p className="text-white text-4xl tracking-tight">
              Fragrance & Beauty
            </p>
            <p className="text-white tracking-tight underline">Learn more</p>
          </div>
          <div className="absolute bg-black/50 inset-0"></div>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-8xl font-nicolas tracking-tighter">
          DIOR
        </h1>
      </div>
    </div>
  );
}
