"use client";
import { TbMenu } from "react-icons/tb";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import Look from "../components/look";
import GridComp from "../components/grid";

const navIcons = [
  { icon: <BiSearch />, link: "" },
  { icon: <AiOutlineHeart />, link: "" },
  { icon: <BsPerson />, link: "" },
  { icon: <AiOutlineShopping />, link: "" },
];

export default function Home() {
  const diorRef = useRef(null);
  const menuRef = useRef(null);
  const iconsRef = useRef(null);
  const videoRef = useRef(null);
  const wordRef = useRef(null);

  useEffect(() => {
    gsap.to(diorRef.current, {
      y: -400,
      delay: 2,
      ease: "none",
    });
    gsap.to(iconsRef.current, {
      y: -400,
      opacity: 1,
      delay: 3,
    });
    gsap.to(menuRef.current, {
      y: -400,
      opacity: 1,
      delay: 3,
    });
    gsap.to(videoRef.current, {
      opacity: 1,
      delay: 4,
    });
    gsap.to(wordRef.current, {
      opacity: 1,
      delay: 3,
    });
  });
  return (
    <div className="h-[100vh] relative inset-0 bg-gray-100">
      <div className="flex items-center text-center h-[10vh] w-full justify-between px-16 translate-y-100">
        <div ref={menuRef} className="opacity-0">
          <TbMenu />
        </div>
        <h1
          className="text-black text-5xl font-nicolas tracking-tighter w-full pl-28 pt-4"
          ref={diorRef}
        >
          DIOR
        </h1>
        <div ref={iconsRef} className="opacity-0 flex w-fit space-x-4">
          {navIcons.map((item, index) => (
            <Link key={index} href={item.link} className="">
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-12">
        <div
          className="w-[500px] mx-auto justify-center items-center text-center opacity-0"
          ref={wordRef}
        >
          <h1 className="text-3xl ">Spring/Summer 2026 Collection Show</h1>
          <p className="text-[14px] pt-4 text-gray-500">
            Exclusive content is coming soon, showcasing silhouettes, backstage
            shots and savoir-faire that capture the essence of the collection.
          </p>
        </div>
        <div ref={videoRef} className="opacity-0 px-4 pt-8">
          <video src="/fashionshow.mp4" autoPlay loop muted playsInline></video>
        </div>
        <div className="mx-auto justify-center items-center text-center bg-gray-100 w-screen">
          <p className="text-xl whitespace-nowrap pt-8">
            "To design for a house like Dior, you have to empathize with its
            history and walk alongside it."
            <br /> - Jonathan Anderson
          </p>
          <p className="pt-8 text-gray-800 text-sm font-semibold">Learn more</p>
        </div>
        <div className="">
          <Look />
        </div>
        <div className="">
          <GridComp />
        </div>
      </div>
    </div>
  );
}
