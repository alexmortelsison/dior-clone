"use client";
import { TbMenu } from "react-icons/tb";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";

const navIcons = [
  { icon: <BiSearch />, link: "" },
  { icon: <AiOutlineHeart />, link: "" },
  { icon: <BsPerson />, link: "" },
  { icon: <AiOutlineShopping />, link: "" },
];

export default function Home() {
  const diorRef = useRef(null);
  const bgRef = useRef(null);
  const menuRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      y: -300,
      duration: 0.5,
      delay: 2,
      ease: "power2.out",
    });
    gsap.to(diorRef.current, {
      scale: 0.6,
      delay: 2,
      duration: 1,
      ease: "back.out",
    });
    gsap.to(menuRef.current, {
      opacity: 1,
      delay: 3,
    });
    gsap.to(iconsRef.current, {
      opacity: 1,
      delay: 3,
    });
  });

  return (
    <div className="h-[100vh] w-screen flex">
      <div className="bg-white min-h-screen w-screen relative">
        <div
          className="bg-white min-h-screen w-full flex flex-col justify-center items-center"
          ref={bgRef}
        >
          <div className="flex justify-between items-center w-screen">
            <div ref={menuRef} className="opacity-0">
              <TbMenu className="text-2xl" />
            </div>
            <h1
              className="text-7xl text-black font-nicolas tracking-tighter scale-100"
              ref={diorRef}
            >
              DIOR
            </h1>
            <div
              className="flex items-center space-x-4 text-2xl opacity-0"
              ref={iconsRef}
            >
              {navIcons.map((item, index) => (
                <Link key={index} href={item.link}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-screen pr-24">
            <h1 className="text-3xl pt-20 text-center flex justify-center">
              Spring/Summer 2026 Collection Show
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
