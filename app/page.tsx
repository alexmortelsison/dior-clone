"use client";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const leftVideoRef = useRef<HTMLVideoElement | null>(null);
  const rightVideoRef = useRef<HTMLVideoElement | null>(null);
  const onClickRef1 = useRef(null);
  const onClickRef2 = useRef(null);
  const diorRef = useRef(null);
  const opacityRef = useRef(null);
  const router = useRouter();
  const bgRef = useRef(null);

  const handleOnClick = () => {
    gsap.to(onClickRef1.current, {
      y: 350,
      delay: 0.5,
      duration: 1,
      ease: "power2.out",
    });
    gsap.to(onClickRef2.current, {
      y: 350,
      delay: 0.5,
      duration: 1,
      ease: "power2.out",
    });
    gsap.to(diorRef.current, {
      opacity: 0,
      scale: 0.6,
      delay: 0.1,
      duration: 0.9,
      color: "#0000000",
      ease: "power4.out",
    });
    gsap.to(opacityRef.current, {
      opacity: 1,
      delay: 0.2,
    });
    gsap.to(bgRef.current, {
      opacity: 0,
      y: "-100vh",
      duration: 1,
      delay: 1.1,
      ease: "power2.inOut",
    });
    setTimeout(() => {
      router.push("/home");
    }, 1100);
  };

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
    <div className="h-full w-screen bg-white z-50 inset-0 " ref={bgRef}>
      <div className="h-[100vh] w-full overflow-hidden absolute inset-0 z-30">
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
            <div
              className="absolute inset-0  flex flex-col justify-center items-center pt-92 gap-y-2"
              ref={onClickRef1}
            >
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
            <div
              className="absolute inset-0  flex flex-col justify-center items-center pt-92 gap-y-2"
              ref={onClickRef2}
            >
              <p className="text-white text-4xl tracking-tight">
                Fragrance & Beauty
              </p>
              <p className="text-white tracking-tight underline">Learn more</p>
            </div>
            <div className="absolute bg-black/50 inset-0 group-hover:opacity-0 transition-opacity duration-300 group-hover:cursor-pointer z-10"></div>
          </div>
        </div>
        <div
          className="absolute inset-0 flex justify-center items-center opacity-100"
          onClick={() => handleOnClick()}
        >
          <h1
            className="text-white text-8xl text-center justify-center flex self-center font-nicolas tracking-tighter z-50 hover:cursor-pointer scale-100"
            ref={diorRef}
          >
            DIOR
          </h1>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1
            className="text-black text-6xl font-nicolas tracking-tighter z-50 hover:cursor-pointer scale-80  opacity-0"
            ref={opacityRef}
          >
            DIOR
          </h1>
        </div>
      </div>
    </div>
  );
}
